import UserModel from "~/server/db/models/user.model"
import crypto from 'crypto'
import userSchema from "~/server/dataSchemas/userSchema";
export default defineEventHandler(async event => {
    const body = await checkValidation(userSchema, event)
    if (!body) {
        console.log("there is no body");
        
        return
    }
    const passwordData = generateHashPassword(body.password)
    console.log(passwordData);
    
    try {
        const user = new UserModel({
            name:body.name,
            mobile:body.mobile,
            password:passwordData.hash,
            sCode:passwordData.salt
        }
           
        )
        await user.save()
        return true
    } catch (e) {
        throw createError({
            statusCode: 500,
            message: e.toString(),
            data: "خطا ایجاد کاربر"
        })
    }
})


function generateHashPassword(password) {
    const salt = crypto.randomBytes(32).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
    return { salt, hash }
}