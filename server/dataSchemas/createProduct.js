import Joi from "joi";


export default Joi.object({
  name: Joi.object({
    fa: Joi.string(),
    en: Joi.string(),
  }),
  description: Joi.object({
    fa: Joi.string(),
    en: Joi.string(),
  }),
  attributes: Joi.array()
    .min(0)
    .items(
      Joi.object({
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
  primaryImage: Joi.array()
    .items(
      Joi.object({
        name: Joi.string(),
        size: Joi.number(),
        type: Joi.string(),
        lastModified: Joi.date(),
        content: Joi.string(),
      })
    ).min(0)
    .allow(null),
  images: Joi.array()
    .items(
      Joi.object({
        name: Joi.string(),
        size: Joi.number(),
        type: Joi.string(),
        lastModified: Joi.date(),
        content: Joi.string(),
      })
    ).min(0)
    .allow(null),
  catalogue:Joi.array().min(0).optional(),
  slug:Joi.string().allow("").allow(null).optional()
});
