import Joi from "joi";

export default Joi.object({
  message: Joi.string(),
  senderName: Joi.string(),
  senderMobile: Joi.string(),
  senderEmail: Joi.string(),
  senderCompany: Joi.string().allow(null).allow("").optional(),
});
