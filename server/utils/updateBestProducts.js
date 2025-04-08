import productModel from "../db/models/product.model";
import settingModel from "../db/models/setting.model";

export default async function() {
    console.log("try to update bestProducts");
    
   const lastProducts = await productModel.find().sort({createdAt:-1}).limit(2).select('_id');
   let  setting = await settingModel.findOne()
   if (!setting){
    setting = new settingModel();
   }
   console.log("setting : ",setting );
   
   setting.bestProducts = lastProducts
   await setting.save();
   return
}