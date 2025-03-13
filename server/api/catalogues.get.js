import productModel from "../db/models/product.model"

export default defineEventHandler(async event=>{
    const lang = event.context.lang
    const catalogues = await productModel.find({catalogue:{$exists: true,$ne: []}}).select(`name.${lang} catalogue primaryImage slug`)
    return catalogues||[]
})