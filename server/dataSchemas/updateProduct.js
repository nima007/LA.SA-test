import Joi from "joi";
import createProduct from "./createProduct";

const updateProductSchema = Joi.object({
    oldAcceptedImages : Joi.array()
})

export default updateProductSchema.concat(createProduct)