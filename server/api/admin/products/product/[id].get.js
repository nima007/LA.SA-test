import productModel from "~/server/db/models/product.model";

export default defineEventHandler(async (event) => {
    const id = getRouterParam(event, 'id');
    const product = await productModel.findById(id);
    let pR = product.toObject()
    delete pR.__v
    return pR;
});