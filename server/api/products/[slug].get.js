import extractProductDataByLang from "~/server/utils/extractProductDataByLang";
import productModel from "../../db/models/product.model";

export default defineEventHandler(async (event) => {
  const slug = getRouterParam(event, "slug");
  const product = await productModel.findOne({ slug });
  if (!product) return { statusCode: 404 };
  const productLang = extractProductDataByLang(product, event.context.lang);
  return productLang
});

