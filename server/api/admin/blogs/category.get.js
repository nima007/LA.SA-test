import blogCagetorySchema from "~/server/dataSchemas/blogCagetorySchema"
import blogcategoryModel from "~/server/db/models/blogcategory.model";

export default defineEventHandler(async event=>{
    const categories = await blogcategoryModel.find()
    return categories
})