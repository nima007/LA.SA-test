export default defineEventHandler(async (event) => {
    const key = getRouterParam(event, 'key');
    const storage = useStorage("blogFile");
    const decodedKey = decodeURIComponent(key);
    console.log("decoded key : ",decodedKey);
    
    const image = await storage.getItemRaw(decodedKey);
    return image || createError({ statusCode: 404, message: "image not found" });
})