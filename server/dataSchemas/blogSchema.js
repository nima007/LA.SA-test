import Joi from "joi";


export default Joi.object({
  _id: Joi.string().optional().allow(null),
  title: Joi.object({
    fa: Joi.string(),
    en: Joi.string().optional().allow(""),
  }),
  description: Joi.object({
    fa: Joi.string().optional().allow(""),
    en: Joi.string().optional().allow(""),
  }).optional().allow(null),
  content: Joi.object({
    fa: Joi.string(),
    en: Joi.string().optional().allow(""),
  }),
  image: Joi.array()
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
  categories: Joi.array().min(0).optional(),
  slug: Joi.string().allow("").allow(null).optional()
});
