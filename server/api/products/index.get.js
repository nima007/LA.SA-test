import productModel from "../../db/models/product.model";

export default defineEventHandler(async (event) => {
  const products = await productModel.find();
  if (!products) return { statusCode: 404 };
  const lang = event.context.lang
  const productsLang = products.map(prd=>extractProductDataByLang(prd, lang));
  console.log("prds",productsLang , "\nlnag :",lang);
  
  return productsLang
});