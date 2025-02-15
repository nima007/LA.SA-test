const productSchema = new Schema({
    name: {
        fa: String,
        en: String
    }, desciption: {
        fa: String,
        en: String
    },
    attributes: {
        fa: [
            {
                key: String,
                value: String,
                unit: String
            }
        ],
        en: [
            {
                key: String,
                value: String,
                unit: String
            }
        ]
    },
    images: [String],
    catalogue: [String]
})