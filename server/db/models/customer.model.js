import { model, Schema } from "mongoose";

const customerSchema = new Schema({
  name: {
    type: String,
    require:true
  },
  mobile: {
    type: String,
  },
  email: {
    type: String,
    require:true
  }
},{
  timestamps:true,
});

export default model("Customer",customerSchema)