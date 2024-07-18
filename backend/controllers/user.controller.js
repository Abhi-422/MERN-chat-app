import User from "../models/user.model.js";

const getUserForSidebar = async(req, res)=>{
    try {
        const loggedInUserId = req.user._id;

        const allUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-passowrd");

        res.status(200).json(allUsers); 

    } catch (error) {
        console.log("error in get user for sidebar function", error.message);
    res.send(500).json({ error: "internal server error" });
    }
};

export default getUserForSidebar;