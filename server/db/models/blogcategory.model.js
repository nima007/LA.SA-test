import mongoose, { model, Schema } from "mongoose";

const categorySchema = new Schema({
    name:{
        fa:String,
        en:String
    },
    slug:{
      type:String,
    },
});

categorySchema.pre('save', async function (next) {
    console.log("save category preSave");
    if (this.isNew) {
      console.log("its new category");
      await slugGenerator(this)
    }
    next();
  })

async function slugGenerator(doc) {
  console.log("updating slug");
  const baseSlug = doc.name.en.trim().replaceAll(" ", "-").normalize()
  const count = await mongoose.models.Blog_Category.countDocuments({
    name: doc.name
  })
  if (count > 0) {
    doc.slug = `${baseSlug}-${count}`;
  } else
    doc.slug = baseSlug;
  console.log("doc", doc);

  return
}
export default model("Blog_Category",categorySchema);