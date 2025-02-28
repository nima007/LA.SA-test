import productModel from "~/server/db/models/product.model"

export default defineEventHandler(async event => {
    const ProductsList = await productModel.find()
    return ProductsList
})