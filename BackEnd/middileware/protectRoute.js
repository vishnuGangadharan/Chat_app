import jwt from "jsonwebtoken"
import User from "../models/userModel.js";

const protectRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({message:"Unauthorised - no token is provided"})
        }
        const decode = jwt.verify(token, process.env.JWT_SECRET);
        if(!decode){
            return res.status(401).json({message:"Unauthorised - no token is provided"})
        }
        
        const user = await User.findById(decode.userId).select("-password")
        if(!user){
            return res.status(401).json({message:"user not found"})
        }
        req.user = user
        next()
    } catch (error) {
       console.log("error in protectRoutes",error.message); 
       return res.status(500).json({message:"Internal server error"})

    }
}

export default protectRoute