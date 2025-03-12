import mongoose, { model, Schema } from "mongoose";

const settingSchema = new Schema(
  {
    footer:{
      phones:Array,
      socialMedia:[
        {
          name:String,
          link:String,
          icon:String,
          _id:false
        }
      ],
      address:String
    },
  },
  { timestamps: true }
);

export default model("Setting", settingSchema);
