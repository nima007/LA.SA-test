import mongoose from "mongoose";
import { normalFileName } from "~/server/utils/saveFile.js";
import updateProduct from "~/server/dataSchemas/updateProduct.js";
import productModel from "~/server/db/models/product.model";

export default defineEventHandler(async (event) => {
  console.log("Update product called");
  const productId = getRouterParam(event, "id")
  const data = await checkValidation(updateProduct, event);
  if (!(data && productId)) return createError({ statusCode: 400 })

  if (!data.primaryFile.length) {
    delete data.primaryFile
  } else {
    const primaryFile = data.primaryImage
    data.primaryImage = await (async () => {
      let x = await saveProductImage(normalFileName(data.name.en), primaryFile);
      return x[0];
    })();
  }
  if (!data.images.length) {
    delete data.images
  } else {
    data.images = await saveProductImage(normalFileName(data.name.en), data.images);
  }
  const _id = mongoose.Types.ObjectId(productId)
  const product = productModel.findOneAndUpdate({_id},{data});
  console.log('prd : ', product);
  return true;
});

