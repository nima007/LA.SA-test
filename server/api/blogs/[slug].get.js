import blogModel from "~/server/db/models/blog.model";

export default defineEventHandler(async event => {
    const lang = event.context.lang;    
    const slug = decodeURIComponent(getRouterParam(event,'slug'));
    const currentTitleLang = 'title.' + lang;
    let blog = blogModel.findOne({slug}).select(`title.${lang} content.${lang} slug image updatedAt categories -_id`).populate('categories');
    return blog
})