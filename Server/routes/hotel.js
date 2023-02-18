import  express from "express";
import { countByCity, countByType, createHotel, deleteHotel, getHotalRooms, getHotel, getidHotel, updateHotel } from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { verifyAdmin } from "../Utils/verifyToken.js";
const router = express.Router();
//Create
router.post("/",verifyAdmin, createHotel)
//update
router.put('/:id',verifyAdmin, updateHotel)
//delete 
router.delete('/:id',verifyAdmin, deleteHotel)
// get id
router.get('/find/:id',getidHotel)
//get
router.get('/',getHotel)
router.get('/countByCity',countByCity)
router.get('/countByType',countByType)
router.get('/room/:id',getHotalRooms)



export default router