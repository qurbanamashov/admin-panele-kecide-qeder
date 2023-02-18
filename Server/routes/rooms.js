import  express from "express";
import { createRoom, deleteRoom, getidRoom, getRoom, updateRoom } from "../controllers/room.js";
import { verifyAdmin } from "../Utils/verifyToken.js";

const router = express.Router();
//Create
router.post("/:hotelId",verifyAdmin, createRoom)
//update
router.put('/:id',verifyAdmin, updateRoom)
//delete 
router.delete('/:id/:hotelid',verifyAdmin, deleteRoom)
// get id
router.get('/:id',getidRoom)
//get
router.get('/',getRoom)

export default router