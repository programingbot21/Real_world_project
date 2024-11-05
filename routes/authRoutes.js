import express from "express";
import{registerController ,
     loginController,
     
     testController,
     forgotPasswordController,
}from "../controllers/authController.js";

import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";

const router = express.Router()

//routing
//register || method post

router.post('/register', registerController)

//LOGIN || POST

router.post('/login', loginController )

//test router

 router.post('/forgotpassword', forgotPasswordController)

router.get('/test',requireSignIn, isAdmin, testController)

router.get("/user-auth", requireSignIn, (req,res) => {
     res.status(200).send( {ok: true})
})

router.get("/admin-auth", requireSignIn,isAdmin, (req,res) => {
     res.status(200).send( {ok: true})
})

export default router;