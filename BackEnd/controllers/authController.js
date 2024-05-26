import User from "../models/userModel.js"
import bcrypt from 'bcryptjs'
import generateAndsetCookie from "../utils/generateJWT.js"


export const signup= async(req,res)=>{
try {
    let {fullName,userName,password,consfirmPassword,gender} = req.body
     if(password!==consfirmPassword){
        return res.status(400).json({error:"password not matched"})
     }
const user = await User.findOne({userName})
if(user){
    return res.status(400).json({error:"Username already exists"})
}

//hashing passsword
const salt = await bcrypt.genSalt(10)
const hashPassword = await bcrypt.hash(password, salt)
//https://avatar.iran.liara.run/public/girl

const boyProfilePic = `https://avatar.iran.liara.run/public/boy?userName=${userName}`
const girlProfilePic = `https://avatar.iran.liara.run/public/girl?userName=${userName}`

const newUser = new User({
    fullName,
    userName,
    password: hashPassword,
    gender,
    profilpic:gender==="male"? boyProfilePic :girlProfilePic
})

if(newUser){
 //generate JWT token 
 generateAndsetCookie(newUser._id,res)
await newUser.save()
res.status(201).json({
    _id:newUser._id,
    fullName:newUser.fullName,
    userName:newUser.userName,
    profilpic:newUser.profilpic
})
}

} catch (error) {
    console.log("error in signUp",error.message);
    res.status(500).json({error:"Internal Server Error"})
}

}



export const login=async(req,res)=>{
    try {
        const {userName,password} = req.body;
        console.log(userName,password);
        const user = await User.findOne({userName})
      
        const isCorrectPassword = await bcrypt.compare(password, user.password || "");
        
        if(!isCorrectPassword || !user){
            return res.status(400).json({error:"Invalid Password or UserName"})
        }
            generateAndsetCookie(user._id,res)
            res.status(201).json({
                _id:user._id,
                fullName:user.fullName,
                userName:user.userName,
                profilpic:user.profilpic
            })
        

    } catch (error) {
        console.log("error in signIn",error.message);
    res.status(500).json({error:"Internal Server Error"})
    }
}

export const logout = (req,res)=>{
    try {
        res.cookie("jwt","",{ maxAge:0});
        res.status(200).json({message:"Logout successfully"})
        
    } catch (error) {
        console.log("error in signIn",error.message);
        res.status(500).json({error:"Internal Server Error"})
    }

}