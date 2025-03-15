import {getServerSession} from "#auth"
export default defineEventHandler(async event=>{
    if(event._path.startsWith("/api/admin")){
        console.log("admin request !");
        const session = await getServerSession(event)
        if(!session || session.user.role!=="admin"){
            console.log("! blocked");
            throw createError({
                statusCode:403,
                message:"شما مجار به انجام این درخواست نیستید !"
            })
        }
    }
})