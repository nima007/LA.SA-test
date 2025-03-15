import { normalFileName } from "~/server/utils/saveFile.js";
import productCreateSchema from "../../../dataSchemas/createProduct.js";
import Product from "../../../db/models/product.model.js";
export default defineEventHandler(async (event) => {
  console.log("create product called");
  const data = await checkValidation(productCreateSchema, event);
  console.log("create product after validate");
  if (data) {
    console.log("data after validation", data);
    const primaryFile = data.primaryImage;
    try {
      data.primaryImage = await (async () => {
        let x = await saveProductImage(
          normalFileName(data.name.en),
          primaryFile
        );
        return x[0];
      })();
      data.catalogue = await (async () => {
        let x = await saveProductImage(
          normalFileName(data.name.en),
          data.catalogue
        );
        return x[0];
      })();
      data.images = await saveProductImage(
        normalFileName(data.name.en),
        data.images
      );
    } catch (e) {
      console.log("there is error in saving files");
      console.error(e)
      return createError({statusCode:500})
    }
    const product = new Product(data);
    await product.save();
    console.log("prd : ", product);
    return true;
  }
});
