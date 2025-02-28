import Joi from "joi";
import createProduct from "./createProduct";

const updateProductSchema = Joi.object({
    oldImages: Joi.array(),
    _id: Joi.string(),
    attributes: Joi.array()
        .min(0)
        .items(
            Joi.object({
                _id:Joi.string(),
                name: Joi.object({
                    fa: Joi.string(),
                    en: Joi.string(),
                }),
                value: Joi.object({
                    fa: Joi.string(),
                    en: Joi.string(),
                }),
                unit: Joi.object({
                    fa: Joi.string(),
                    en: Joi.string(),
                }),
            })
        ),
})

export default updateProductSchema.concat(createProduct)