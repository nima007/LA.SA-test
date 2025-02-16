const productSchema = new Schema({
    name: {
        fa: String,
        en: String
    }, desciption: {
        fa: String,
        en: String
    },
    attributes: [
        {
            name: {
                fa: String,
                en: String
            },
            value: {
                fa: String,
                en: String
            },
            unit: {
                fa: String,
                en: String
            }
        }
    ],
    primaryImage: String,
    images: [String],
    catalogue: [String]
})
export default model('Product', productSchema)