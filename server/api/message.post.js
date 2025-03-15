import messageSchema from "../dataSchemas/messageSchema";
import messageModel from "../db/models/message.model";

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    console.log(body);
    
    const data = await checkValidation(messageSchema,event );
    console.log(data);
    
    const message = new messageModel(data);
    await message.save();
    return { message: "message sent successfully" };
  } catch (err) {
    console.log("err",err);
    throw createError({
      statusCode: 500,
    });
  }
});
