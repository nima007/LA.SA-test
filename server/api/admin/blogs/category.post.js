import blogCagetorySchema from "~/server/dataSchemas/blogCagetorySchema"
import blogcategoryModel from "~/server/db/models/blogcategory.model";

export default defineEventHandler(async event=>{
    const data = await checkValidation(blogCagetorySchema,event)
    console.log(data);
    const category  = new blogcategoryModel(data)
    const saved =  await category.save()
    return saved
})