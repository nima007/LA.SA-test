import settingModel from "~/server/db/models/setting.model"
import updateBestProducts from "~/server/utils/updateBestProducts";

export default defineEventHandler(async event=>{
    const setting = await settingModel.findOne().populate('bestProducts');
    if(!setting?.bestProducts.length){
        await updateBestProducts();
    }
    return setting
})