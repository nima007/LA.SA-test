import messageModel from "~/server/db/models/message.model";

export default defineEventHandler(async (event) => {
  const messages = await messageModel.find();
  return messages;
});
