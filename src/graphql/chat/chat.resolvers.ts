import { IMaster } from "../master/master.interface";
import { mapper } from "./chat.helper";
import { ISendChatRequest } from "./chat.interface";
import { Chat } from "./chat.schema";

export const queries = {};

export const mutations = {
  sendChatRequest: async (
    _parent: any,
    payload: { input: ISendChatRequest }
  ) => {
    try {
      const chatMapper = mapper(payload.input);

      let chat;
      chat = await Chat.find({
        createdBy: payload.input?.createdBy,
      });

      console.log("previous chat record", chat);

      if (!chat?.length) {
        chat = await Chat.create(chatMapper);
      } else {
        chat = chat[0];
      }

      const chatResponse = await chat.populate("employeeId");
      const employeeEmail = (chatResponse?.employeeId as unknown as IMaster)
        ?.details[0]?.email;

      console.log("chat record", chat);
      console.log(
        `${process.env.CLIENT_URL}/chat/${chat.id}?email=${chat?.createdBy}`
      );
      return chat;
    } catch (error) {
      console.log(error);
    }
  },

  getChattingData: async (_parent: any, payload: { chatId: string }) => {
    const chatResponse = await Chat.findById(payload.chatId);
    return chatResponse;
  },
};
