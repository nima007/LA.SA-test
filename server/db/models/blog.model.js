import mongoose, { model, Schema } from "mongoose";

const blogSchema = new Schema(
  {
    slug: {
      type: String,
      unique: true,
      index: true,
    },
    title: {
      fa: String,
      en: String,
    },
    description: {
      fa: String,
      en: String,
    },
    content: {
      fa: String,
      en: String,
    },
    image: [String],
    categories: [String],
    user:{
      id:Schema.Types.ObjectId,
      name:String
    }
  },
  { timestamps: true }
);

blogSchema.pre("save", async function (next) {
  console.log("save blog preSave");
  if (this.isNew) {
    console.log("its new blog");
    await slugGenerator(this);
  }
  next();
});

async function slugGenerator(doc) {
  console.log("updating slug");
  const baseSlug = doc.title.fa.trim().replaceAll(" ", "-").normalize();
  const count = await mongoose.models.Blog.countDocuments({
    name: doc.name,
  });
  if (count > 0) {
    doc.slug = `${baseSlug}-${count}`;
  } else doc.slug = baseSlug;
  console.log("doc", doc);

  return;
}
export default model("Blog", blogSchema);
