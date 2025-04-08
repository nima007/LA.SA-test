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
    },bestProducts:[
      {
        type:Schema.Types.ObjectId,
        ref:'Product'
      }
    ]
  },
  { timestamps: true }
);

export default model("Setting", settingSchema);
