import Joi, { link } from "joi";

export default Joi.object({
    phones: Joi.array(),
    socialMedia: Joi.array().min(0).items(
        Joi.object({
            name: Joi.string(),
            link: Joi.string(),
            icon: Joi.string().optional().allow(null),
        }).optional().allow(null)
    ),
    address: Joi.string().optional().allow("")

})