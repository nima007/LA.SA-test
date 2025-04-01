import { model, Schema } from "mongoose";

const pageSchema = new Schema({
    pageName: {
        type: String,
        unique: true,
        index: true,
    },
    content: {
        fa: { type: String, default: "" },
        en: { type: String, default: "" },
    }
}, { timestamps: true });
export default model('Page',pageSchema);