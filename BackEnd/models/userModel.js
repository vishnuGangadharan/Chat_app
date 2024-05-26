import mongoose from "mongoose";

const userScheme = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:6
    },
    gender:{
        type:String,
        required:true,
        enum:["male","female"]
    },
    profilpic:{
        type:String,
        default:''
    }
});


const User = mongoose.model("User", userScheme)

export default User

