import productCreateSchema from "../../../dataSchemas/createProduct.js"; 
import Product from '../../../db/models/product.model.js'
export default defineEventHandler(async event=>{
    console.log("create product called");

    const data  = await checkValidation(productCreateSchema,event);
    if (data) {
        console.log("data after validation", data);
        data.primaryImage="";
        const product = new Product(data);
        await product.save();
        return true
    }
})