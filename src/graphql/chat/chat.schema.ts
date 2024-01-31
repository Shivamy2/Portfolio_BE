import mongoose, { Schema } from "mongoose";

const chatSchema = new Schema(
  {
    name: String,
    message: String,
    employeeId: {
      type: Schema.Types.ObjectId,
      ref: "ruleEngine",
    },
    createdBy: String, // email of user who initiated this chat
    participants: {
      type: [String],
    },
  },
  {
    timestamps: true,
  }
);

export const Chat = mongoose.model("chat", chatSchema);
