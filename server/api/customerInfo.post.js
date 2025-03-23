import customerModel from "../db/models/customer.model";

export default defineEventHandler(async event => {
    const data = await readBody(event);
    const { name, email, mobile } = data;
    const customer = new customerModel({
        name,
        email,
        mobile
    })
    try {
        await customer.save()
        return true
    }catch(e){
        console.log(e);
        
        return
    }
})