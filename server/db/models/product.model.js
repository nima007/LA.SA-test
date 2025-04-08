import mongoose, { model, Schema } from "mongoose";
import updateBestProducts from "~/server/utils/updateBestProducts";

const productSchema = new Schema({
  slug: {
    type: String,
    unique: true,
    index: true,
  },
  name: {
    fa: String,
    en: String,
  },
  description: {
    fa: String,
    en: String,
  },
  attributes: [
    {
      name: {
        fa: String,
        en: String,
      },
      value: {
        fa: String,
        en: String,
      },
      unit: {
        fa: String,
        en: String,
      },
    },
  ],
  primaryImage: String,
  images: [String],
  catalogue: [String],
}, { timestamps: true });

productSchema.pre('save', async function (next) {
    console.log("save product preSave");
    if (this.isNew) {
      console.log("its new product");
      await slugGenerator(this)
    }
    next();
  })
productSchema.post('save',()=>{
  updateBestProducts()
})
async function slugGenerator(doc) {
  console.log("updating slug");
  const baseSlug = doc.name.en.trim().replaceAll(" ", "-").normalize()
  const count = await mongoose.models.Product.countDocuments({
    name: doc.name
  })
  if (count > 0) {
    doc.slug = `${baseSlug}-${count}`;
  } else
    doc.slug = baseSlug;
  console.log("doc", doc);

  return
}
export default model("Product", productSchema);
