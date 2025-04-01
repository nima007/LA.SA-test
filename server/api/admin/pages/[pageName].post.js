import pageSchema from "~/server/dataSchemas/pageSchema";
import pageModel from "~/server/db/models/page.model";

export default defineEventHandler(async event=>{
    const pageName = getRouterParam(event,'pageName');
    console.log("page name : ",pageName);    
    const data = await checkValidation(pageSchema,event)
    if(!pageName) return createError({statusCode:400});
    const findedPage = await pageModel.findOne({pageName});
    let savedPage = null
    if(findedPage){
        findedPage.content= data.content
        savedPage = await findedPage.save()
    }else{
        data.pageName = pageName
        const page = new pageModel(data);
        console.log("page : ",data);
        
        savedPage = await page.save()
    }
    return savedPage
})