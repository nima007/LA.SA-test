import blogModel from "~/server/db/models/blog.model";

export default defineEventHandler(async event=>{
    const slug = decodeURIComponent(getRouterParam(event,'slug'));
    console.log("slug : ",slug);
    
    const blog = await blogModel.findOne({slug});
    return blog
})