import blogModel from "~/server/db/models/blog.model";

export default defineEventHandler(async event=>{
    const data = await readBody(event);
    try{
        const blog = new blogModel(data);
    }catch(e){
        createError({
            statusCode:500,
            message:"خطا در ذخیره بلاگ"
        })
    }
})