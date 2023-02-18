import express from "express";
import { deleteUser, getidUser, getUser, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../Utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send('hello user, you are logged in')
// })
// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send('hello  user, you are login in and you can delete you accont')
// })
// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send('hello  admin, you are login in and you can delete you all acconts')
// })
//update
router.put('/:id',verifyUser, updateUser)
//delete 
router.delete('/:id',verifyUser, deleteUser)
// get id
router.get('/:id',verifyUser, getidUser)
//get
router.get('/', verifyAdmin, getUser)

export default router