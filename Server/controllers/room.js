import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../Utils/error.js";
 export const createRoom  = async (req,res, next ) =>{
    const hotelId =req.params.hotelId
    const newRoom = new Room(req.body)
    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId, {
                $push:{rooms: savedRoom._id},})
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err)
    }
 }
 export const updateRoom = async (req,res,next)=>{ 
    try{
        const updateRoom= await Room.findByIdAndUpdate(req.params.id, {$set: req.body},{new:true})
        res.status(200).json(updateRoom)
    }catch(err){
        next(err)
    }
}
export const deleteRoom =  async (req,res,next)=>{ 
    const hotelId =req.params.hotelid
    try{
        await Room.findByIdAndDelete(req.params.id)
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull:{rooms: req.params.id}})
        } catch (err) {
            next(err)
        }
        res.status(200).json("Room api delete")
    }catch(err){
        next(err)
    }
}
export const getidRoom =  async (req,res,next)=>{ 
    try{
        const getidRoom= await Room.findById(req.params.id)
        res.status(200).json(getidRoom)
    }catch(err){
        next(err)
    }
}
export const getRoom =   async (req,res,next)=>{ 
    try{
        const getRoom= await Room.find()
        res.status(200).json(getRoom)
    }catch(err){
        next(err)
    }
}