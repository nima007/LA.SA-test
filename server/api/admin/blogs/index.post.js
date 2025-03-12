import blogSchema from "~/server/dataSchemas/blogSchema";
import blogModel from "~/server/db/models/blog.model";

export default defineEventHandler(async event => {
    const data = await checkValidation(blogSchema, event)
    data.image = await (async () => {
        let x = await saveBlogImage(normalFileName(data.title.fa), data.image);
        return x[0];
    })();

    try {
        const blog = new blogModel(data);
        blog.save();
        return blog
    } catch (e) {
        return createError({
            statusCode: 500,
            message: "خطا در ذخیره بلاگ"
        })
    }
})