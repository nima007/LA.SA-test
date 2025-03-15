import Joi from "joi";

export default Joi.object({
    name:Joi.string().min(3).max(40).normalize(),
    mobile:Joi.string().length(11).regex(new RegExp('^(\\+98|0)?9\\d{9}$')),
    email:Joi.string().email(),
    password:Joi.string().min(8).max(20),
})