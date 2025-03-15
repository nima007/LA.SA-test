import messageModel from "~/server/db/models/message.model";

export default defineEventHandler(async (event) => {
  const _id = getRouterParam(event,'id')
  let message = await messageModel.findById(_id)
  message.isRead =true;
  await message.save()
  return true

});
