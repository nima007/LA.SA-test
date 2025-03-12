import settingModel from "~/server/db/models/setting.model"

export default defineEventHandler(async event=>{
    const setting = await settingModel.findOne();
    return setting
})