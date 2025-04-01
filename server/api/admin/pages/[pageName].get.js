import pageModel from "~/server/db/models/page.model";

export default defineEventHandler(async event=>{
    const pageName = getRouterParam(event,'pageName');
    if(!pageName) return createError({statusCode:400});
    const findedPage = await pageModel.findOne({pageName});
    return findedPage
})