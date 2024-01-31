import { ISendChatRequest } from "./chat.interface";

export const mapper = (chat: ISendChatRequest) => {
  return {
    name: chat?.name || "",
    message: chat?.message || "",
    createdBy: chat?.createdBy || "",
    participants: [chat?.createdBy, chat?.createdFor],
    employeeId: chat?.employeeId || "",
  };
};
