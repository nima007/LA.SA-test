import blogModel from "~/server/db/models/blog.model";

export default defineEventHandler(async event => {
    const lang = event.context.lang
    const currentTitleLang = 'title.'+lang;
    let blogs = blogModel.find().select(`title.${lang} slug image updatedAt categories -_id`);
return blogs
})