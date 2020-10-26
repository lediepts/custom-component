import { NextApiRequest, NextApiResponse } from "next";
import Shell from "node-powershell";


const ps = new Shell({
  executionPolicy: "Bypass",
  noProfile: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (process.env.NODE_ENV!=="development")
  res.status(403).end()
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const output=  await runCommand();

        res.status(200).send(output);
      } catch (error) {
        res.status(error.status || 500).end();
      }
      break;
    case "POST":
      try {
        const output= await runCommand(req.body?.cmd);
        res.status(200).send(output);
      } catch (error) {
        res.status(error.status || 500).end();
      }
      break;
    default:
      res.status(404).end();
      break;
  }
}

const runCommand = async (cmd = "dir") => {
  try {
    
    ps.addCommand("chcp 65001");
    const chcp= await ps.invoke()
    if(chcp){
      ps.addCommand(cmd)
      const output = ps.invoke()
      if(output)
      return output
      }
  } catch (error) {
    return `${error}`
  }
};
