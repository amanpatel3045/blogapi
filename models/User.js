import mongoose from "mongoose";
mongoose.set('strictQuery', true);
const userSchema= new mongoose.Schema({
  name:{
    type:String,
    required:true,
  },
  email:{
    type:String,
    required:true,
  unique:true,
  },
  password:{
    type:String,
    required:true,
    minLength:6,
  },
  posts:[{type:mongoose.Types.ObjectId,ref:"Post"}],

});




export default mongoose.model("user",userSchema);
