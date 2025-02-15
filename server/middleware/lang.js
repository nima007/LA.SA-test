export default defineEventHandler(event=>{
    const query = getQuery(event);
    event.context.lang = query.lang || 'fa';
})