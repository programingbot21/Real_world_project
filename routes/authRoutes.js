import express from "express";
import{registerController ,
     loginController,
     
     testController,
}from "../controllers/authController.js";

import { isAmin, requireSingnIn } from "../middleware/authMiddleware.js";

const router = express.Router()

//routing
//register || method post

router.post('/register', registerController)

//LOGIN || POST

router.post('/login', loginController )

//test router

router.get('/test',requireSingnIn, isAmin, testController)

export default router;