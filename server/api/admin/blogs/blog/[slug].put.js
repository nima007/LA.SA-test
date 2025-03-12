import blogSchema from "~/server/dataSchemas/blogSchema";
import blogModel from "~/server/db/models/blog.model";

export default defineEventHandler(async event => {
    const slug = decodeURIComponent(getRouterParam(event, 'slug'));
    const data = await checkValidation(blogSchema, event);
    const blog = await blogModel.findOne({ slug });
    if (!blog) return createError({ statusCode: 404 })
    console.log("data : ", data);
    try {
        blog.title = data.title;
        blog.content = data.content;
        if (data?.image) {
            blog.image = await (async () => {
                let x = await saveBlogImage(normalFileName(data.title.fa), data.image);
                return x[0];
            })();
        }
        blog.categories = data.categories;
        const saved = await blog.save();
        return saved
    } catch (e) {
        console.log("error : ", e);
        createError({
            statusCode: 400
        })
    }
})