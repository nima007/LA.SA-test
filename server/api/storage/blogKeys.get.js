export default defineEventHandler(async (event) => {
    const storage = useStorage("blogFile");
    const keys = await storage.getKeys();
    return keys.map(x=>`/api/storage/blog/${x}`) || createError({ statusCode: 404, message: "image not found" });
})