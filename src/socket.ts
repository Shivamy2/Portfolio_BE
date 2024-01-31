import { Socket, Server } from "socket.io";
import { EVENT_NAMES } from "./constants";
import { Request } from "express";

export const initializeSocket = (io: Server) => {
  return io.on(EVENT_NAMES.CONNECTED, async (socket: Socket) => {
    try {
      console.log("Connection established 🗼", socket?.id);
      socket.emit(
        EVENT_NAMES.CONNECTION_SUCCESS,
        "BE sending response: Connection Successfull"
      );
      socket.emit(EVENT_NAMES.CONNECTION_ESTABLISHED_BW_USERS, "done");
      socket.on(
        EVENT_NAMES.JOIN_CHAT,
        ({ chatId, email }: { chatId: string; email: string }) => {
          socket.join(chatId);
          socket.in(chatId).emit(email, "another is also connected");
          console.log("Successfully join chat id", chatId);
        }
      );
      socket.on(EVENT_NAMES.DISCONNECT, () => {
        console.log("Disconnected 🚫. userId: ", socket?.id);
      });
    } catch (error: any) {
      socket.emit(
        EVENT_NAMES.ERROR,
        console.log(
          error?.message ||
            "Something went wrong while connecting to the socket."
        )
      );
    }
  });
};

export const emitSocket = (
  event: keyof typeof EVENT_NAMES,
  roomId: string,
  payload: Function,
  request: Request
) => {
  request.app.get("io").in(roomId).emit(event, payload);
};
