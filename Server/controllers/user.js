import User from "../models/User.js"

export const updateUser = async (req,res,next)=>{ 
    try{
        const updateUser= await User.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updateUser)
    }catch(err){
        next(err)
    }
}
export const deleteUser =  async (req,res,next)=>{ 
    try{
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User api delete")
    }catch(err){
        next(err)
    }
}
export const getidUser =  async (req,res,next)=>{ 
    try{
        const getidUser= await User.findById(req.params.id)
        res.status(200).json(getidUser)
    }catch(err){
        next(err)
    }
}
export const getUser =   async (req,res,next)=>{ 
    try{
        const getUser= await User.find()
        res.status(200).json(getUser)
    }catch(err){
        next(err)
    }
}