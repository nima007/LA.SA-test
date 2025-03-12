import settingFooterSchema from "~/server/dataSchemas/settingFooterSchema"
import settingModel from "~/server/db/models/setting.model";

export default defineEventHandler(async event=>{
    const data = await checkValidation(settingFooterSchema,event);
    // let setting = await settingModel.findOne()
    // if(!setting) setting = new settingModel();
    // setting.footer = data;
    // const newSetting = await setting.save();
    // return newSetting;
    return createError({statusCode:500})
})