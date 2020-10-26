import { NextApiRequest, NextApiResponse } from "next";
import Shell from "node-powershell";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    method,
    body: { cmd },
  } = req;
  if (process.env.NODE_ENV !== "development") res.status(403).end();
  switch (method) {
    case "POST":
      try {
        const ps = new Shell({
          executionPolicy: "Bypass",
          noProfile: true,
        });
        ps.addCommand(`chcp 65001`);
        ps.invoke().then((_rs: any) => {
          ps.addCommand(cmd);
          ps.invoke().then((response) => {
            res.status(200).send(response);
          });
        });
      } catch (error) {
        res.status(error.status || 500).end();
      }
      break;
    default:
      res.status(404).end();
      break;
  }
}
