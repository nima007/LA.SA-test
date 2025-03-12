import settingModel from "~/server/db/models/setting.model";

export default defineEventHandler(async event=>{
    let setting = await settingModel.findOne()
    if(!setting) return null
    console.log("setting : ", setting);
    
    return setting.footer;
})