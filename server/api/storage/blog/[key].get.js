export default defineEventHandler(async (event) => {
    const key = getRouterParam(event, 'key');
    const storage = useStorage("blogFile");
    const decodedKey = decodeURI(key);
    const image = await storage.getItemRaw(decodedKey);
    return image || createError({ statusCode: 404, message: "image not found" });
})