import blogModel from "~/server/db/models/blog.model"

export default defineEventHandler(async event=>{

    const blogs = await blogModel.find()
    return blogs
})