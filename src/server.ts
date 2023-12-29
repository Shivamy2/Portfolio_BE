import express, { Request, Response } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createGraphQlServer from "./graphql";
import "dotenv/config";
import establishMongoConnection from "./db/connection";
import cors from "cors";

const runServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());

  const PORT = Number(process.env.PORT) || 8000;

  app.get("/", (_req: Request, res: Response) =>
    res.json({ message: "Working" })
  );

  await establishMongoConnection();

  app.use("/graphql", expressMiddleware(await createGraphQlServer()));

  app.listen(PORT, () => console.log(`🚀 Listening on PORT ${PORT}`));
};

runServer();
