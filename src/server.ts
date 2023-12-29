import express, { Request, Response } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createGraphQlServer from "./graphql";
import dotenv from "dotenv";
import establishMongoConnection from "./db/connection";

const runServer = async () => {
  dotenv.config();
  const app = express();
  app.use(express.json());

  const PORT = Number(process.env.PORT) || 8000;

  app.get("/", (_req: Request, res: Response) =>
    res.json({ message: "Working" })
  );

  await establishMongoConnection();

  app.use("/graphql", expressMiddleware(await createGraphQlServer()));

  app.listen(PORT, () => console.log(`🚀 Listening on PORT ${PORT}`));
};

runServer();
