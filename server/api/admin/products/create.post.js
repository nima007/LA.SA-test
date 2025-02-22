import productCreateSchema from "../../../dataSchemas/createProduct.js";
import Product from "../../../db/models/product.model.js";
export default defineEventHandler(async (event) => {
  console.log("create product called");
  const data = await checkValidation(productCreateSchema, event);
  if (data) {
    console.log("data after validation", data);
    const primaryFile = data.primaryImage
    data.primaryImage =  await saveProductImage(data.name.en.trim().replaceAll(" ", "-").normalize(), primaryFile);
    // const imageListFiles =  
    console.log("prim : ",data.primaryImage);
    
    const product = new Product(data);
    await product.save();
    console.log('prd : ',product);
    
    return true;
  }
});
