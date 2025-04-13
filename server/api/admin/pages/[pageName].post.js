import pageSchema from "~/server/dataSchemas/pageSchema";
import pageModel from "~/server/db/models/page.model";
import DOMPurify from 'dompurify';
import { JSDOM } from 'jsdom';
export default defineEventHandler(async event => {
    
    const pageName = getRouterParam(event, 'pageName');
    console.log("page name : ", pageName);
    const data = await checkValidation(pageSchema, event)
    if (!pageName) return createError({ statusCode: 400 });
    const findedPage = await pageModel.findOne({ pageName });
    let savedPage = null
    if (findedPage) {
        data.content = sanitizeMulLangContent(data.content);
        findedPage.content = data.content;
        savedPage = await findedPage.save();
    } else {
        data.pageName = pageName;
        data.content = sanitizeMulLangContent(data.content);
        const page = new pageModel(data);
        console.log("page : ", data);

        savedPage = await page.save()
    }
    return savedPage
})

function sanitizeMulLangContent(content) {
    const window = new JSDOM('').window;
    const purify = DOMPurify(window)
    for(let lang in content){
        content[lang]=purify.sanitize(content[lang]);
    }
    return content
}