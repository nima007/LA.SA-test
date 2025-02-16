export default async function (Schema, event = useEvent()) {
    console.log("in validation");
    const body = await readBody(event);
    console.log("body ",body);
    
    const { error } = Schema.validate(body)
    if (error) {
        console.log("there is err");
        console.log(error.details);
        console.log("! validation : there is a  error", error.details.map(d => ({ message: d.message, path: d.path })));
        throw createError({
            statusCode: 400,
            message: JSON.stringify(error.details.map(d => ({ message: d.message, path: d.path }))),
            data: { additional: "info" }
        });
        return false
    }
    console.log("validation :there is no error");

    return body
}  