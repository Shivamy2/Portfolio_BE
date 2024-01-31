import express, { Request, Response } from "express";
import { expressMiddleware } from "@apollo/server/express4";
import createGraphQlServer from "./graphql";
import "dotenv/config";
import establishMongoConnection from "./db/connection";
import cors from "cors";
import { Server } from "socket.io";
import httpServer from "http";
import { initializeSocket } from "./socket";

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

  // app.listen(PORT, () => console.log(`🚀 Listening on PORT ${PORT}`));

  const server = httpServer.createServer(app);

  server.listen(PORT, () => console.log(`🚀 Listening on PORT ${PORT}`));

  const io = new Server(server, {
    cors: {
      origin: [process.env.CLIENT_URL || ""],
      methods: ["GET", "POST"],
    },
  });

  app.set("io", io); // using set method to mount the `io` instance on the app to avoid usage of `global`

  initializeSocket(io);
};

runServer();
