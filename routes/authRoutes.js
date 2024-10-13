import express from "express";
import{registerController , loginController}from "../controllers/authController.js";
const router = express.Router()

//routing
//register || method post

router.post('/register', registerController)

//LOGIN || POST

router.post('/login', loginController )
export default router;