import mongoose from "mongoose"

export default async () => {
    const config = useRuntimeConfig();
    mongoose.connect(config.mongoose_url).then(() => {
        console.log("mongoose connected ...");
    }).catch((e) => {
        console.log("!!! mongoose connection failded ",e);
    })
}