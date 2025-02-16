import productCreateSchema from "../../../dataSchemas/createProduct.js"; 
export default defineEventHandler(async event=>{
    console.log("create product called");

    const data  = await checkValidation(productCreateSchema,event);
    // prdCreateSchema, event
    // if (data) {
    //     console.log("data after validation", data);
        
    //     // const product = new product(data);
    //     // await product.save();
    //     return true
    // }
})