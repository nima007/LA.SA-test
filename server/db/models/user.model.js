import { model, Schema } from "mongoose";

const userSchema = new Schema({
  name: {
    type: String,
    require:true
  },
  mobile: {
    type: String,
    require:true,
    unique:true,
    index:true
  },
  email: {
    type: String,
  },
  role: {
    type: String,
    default:"customer",
    enum: ["admin", "customer"],
  },
  password: {
    type: String,
    require:true,
    select:false
  },
  sCode: {
    type: String,
    require:true,
    select:false
  },address:[
    {
        name:String,
        state:{type:String,require:true},
        city:{type:String,require:true},
        address:{type:String,require:true},
        postCode:{type:String,require:true}
    }
  ]
},{
  timestamps:true,
});

export default model("User",userSchema)