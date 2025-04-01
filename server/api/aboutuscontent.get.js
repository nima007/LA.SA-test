import pageModel from "../db/models/page.model"
import lang from "../middleware/lang";

export default defineEventHandler(async event => {
    const lang = event.context.lang
    const aboutus = await pageModel.findOne({ pageName: "aboutus" }).select(`content.${lang} -_id`);
    return aboutus.content[lang]
})