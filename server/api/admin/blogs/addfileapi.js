export default defineEventHandler(async event => {
    let data = await readBody(event);
    if (!data.file.length)
        createError({statusCode: 500, message: "خطا در ذخیره فایل"})
    let file = await (async () => {
        let x = await saveBlogImage(normalFileName(data.file[0].name), data.file);
        return x[0];
    })();
    if (file)
        return file
    else
        createError({statusCode: 500, message: "خطا در ذخیره فایل"})
})