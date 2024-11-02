import express from "express";
import{registerController ,
     loginController,
     
     testController,
     forgotPasswordController,
}from "../controllers/authController.js";

import { isAdmin, requireSingnIn } from "../middleware/authMiddleware.js";

const router = express.Router()

//routing
//register || method post

router.post('/register', registerController)

//LOGIN || POST

router.post('/login', loginController )

//test router

 router.post('/forgotpassword', forgotPasswordController)

router.get('/test',requireSingnIn, isAdmin, testController)

router.get("/user-auth", requireSingnIn, (req,res) => {
     res.status(200).send( {ok: true})
})

router.get("/admin-auth", requireSingnIn,isAdmin, (req,res) => {
     res.status(200).send( {ok: true})
})

export default router;