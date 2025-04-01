import Joi from "joi";


export default Joi.object({
  _id: Joi.string().optional().allow(null),
  pageName:Joi.string().optional().allow(""),
  createdAt:Joi.string().optional().allow(""),
  updatedAt:Joi.string().optional().allow(""),
  content: Joi.object({
    fa: Joi.string().messages({'string.empty':"متن صفحات باید به تمامی زبان ها بصورت همزمان وارد شود  "}),
    en: Joi.string().messages({'string.empty':'متن صفحات باید به تمامی زبان ها بصورت همزمان وارد شود '}),
  }),
});
