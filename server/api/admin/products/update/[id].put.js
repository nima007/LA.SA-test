import mongoose from "mongoose";
import { normalFileName } from "~/server/utils/saveFile.js";
import updateProduct from "~/server/dataSchemas/updateProduct.js";
import productModel from "~/server/db/models/product.model";

export default defineEventHandler(async (event) => {
  console.log("Update product called");
  const productId = getRouterParam(event, "id");
  const data = await checkValidation(updateProduct, event);
  if (!(data && productId)) return createError({ statusCode: 400 });
  const storage = useStorage("productsImages");

  const product = await productModel.findById(productId);
  delete data._id;

  if (!data.primaryImage.length) {
    data.primaryImage = null;
  } else {
    data.primaryImage = await (async () => {
      let x = await saveProductImage(
        normalFileName(data.name.en),
        data.primaryImage
      );
      return x[0];
    })();
  }

  data.images = await saveProductImage(
    normalFileName(data.name.en),
    data.images
  );
  data.oldImages.forEach((oImg) => {
    const i = product.images.findIndex((img) => img == oImg);
    i < 0 && storage.removeItem(oImg);
  });
  try {
    data.images = data.images.concat(data.oldImages);
    product.name = data.name;
    product.description = data.description;
    product.attributes = data.attributes;
    product.primaryImage = data.primaryImage || product.primaryImage;
    product.images = data.images;
    product.catalogue = data.catalogue;
    product.slug = data.slug;
    product.save();
    return true;
  } catch (e) {
    console.log("خطا در بروز رسانی");
    createError({
      statusCode: 500,
      message: "خطا در بروزرسانی محصول : " + e.message
    })
  }
});