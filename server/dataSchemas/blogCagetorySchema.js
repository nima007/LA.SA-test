import Joi from "joi";

export default Joi.object({
    _id: Joi.string().optional().allow(null),
    name: Joi.object({
        fa: Joi.string(),
        en: Joi.string(),
    }),
    slug:Joi.string().allow(null)
})