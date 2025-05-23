export default defineEventHandler(async (event) => {
    const key = getRouterParam(event, 'key');
    const storage = useStorage("productsImages");
    console.log("key" , key);
    const decodedKey = decodeURI(key)
    console.log("________________Dkey" , decodedKey);
    const image = await storage.getItemRaw(decodedKey);
    return image || createError({ statusCode: 404, message: "image not found" });
})