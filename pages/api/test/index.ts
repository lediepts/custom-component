import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";
import initMiddleware from "../../../lib/middleware";

// Initializing the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res);

  const { method } = req;
  switch (method) {
    case "GET":
      try {
        res.status(200).send(process.env.REDMINE_URL);
      } catch (error) {
        res.status(error.status || 500).end();
      }
      break;
    default:
      res.status(404).end();
      break;
  }
}
