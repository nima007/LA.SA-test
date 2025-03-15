import mongoose, { model, Schema } from "mongoose";

const messageModel = new Schema({

    senderName: String,
    senderMobile: String,
    senderEmail: String,
    senderCompany: String,
    message: String,
    isRead:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
});



export default model("Message", messageModel);
