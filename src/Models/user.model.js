import mongoose, { model, Schema } from "mongoose";
 const userSchema=new Schema({
    name: {
        type: String,

    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true

    },
profileImage:{
    type:String
}


 })
 const user=model('Auth',userSchema);
 export default user