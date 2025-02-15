export default defineEventHandler(event => {
    console.log('lang in index get :', event.context.lang);
    return {"data": "Hello World"};
})