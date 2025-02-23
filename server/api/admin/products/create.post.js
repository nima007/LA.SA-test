import productCreateSchema from "../../../dataSchemas/createProduct.js";
import Product from "../../../db/models/product.model.js";
export default defineEventHandler(async (event) => {
  console.log("create product called");
  const data = await checkValidation(productCreateSchema, event);
  if (data) {
    console.log("data after validation", data);
    const primaryFile = data.primaryImage
    data.primaryImage =  await(async()=>{
      let x = await saveProductImage(normalFileName(data.name.en), primaryFile)
      console.log("x : ",x);
      console.log("x0 : ",x[0]);
      
      return x[0];
    })();
    // const imageListFiles =  
    console.log("!!!!!!!!prim : ",data);
    
    const product = new Product(data);
    await product.save();
    console.log('prd : ',product);
    
    return true;
  }
});

function normalFileName(name) {
  return name.trim().replaceAll(" ", "-").normalize()
}