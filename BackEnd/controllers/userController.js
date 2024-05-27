import User from "../models/userModel.js";


export const getUserForSideBar = async(req,res)=>{
    try {
        let loggedUser = req.user._id;
        let allUsers = await User.find({_id:{$ne:loggedUser}}).select("-password")
        res.status(200).json(allUsers)
    } catch (error) {
        console.log("user NOT found",error.message);
        res.status(500).josn({message:"internal server error"})
    }
}