import Joi from "joi";

export default Joi.object(
    {
        name: Joi.object({
            fa: Joi.string(),
            en: Joi.string().optional().allow(null)
        }),
        description: Joi.object({
            fa: Joi.string(),
            en: Joi.string().optional().allow("")
        }),
        attributes: Joi.array().min(0).items(
            Joi.object({
                name: Joi.object({
                    fa: Joi.string(),
                    en: Joi.string().optional().allow(null)
                }),
                value: Joi.object({
                    fa: Joi.string(),
                    en: Joi.string().optional().allow(null)
                }),
                unit: Joi.object({
                    fa: Joi.string(),
                    en: Joi.string().optional().allow(null)
                }),
            }),
        ),
    },
)
