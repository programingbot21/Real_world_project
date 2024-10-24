import express from "express";
import{registerController ,
     loginController,
     
     testController,
     forgotPasswordController,
}from "../controllers/authController.js";

import { isAmin, requireSingnIn } from "../middleware/authMiddleware.js";

const router = express.Router()

//routing
//register || method post

router.post('/register', registerController)

//LOGIN || POST

router.post('/login', loginController )

//test router

router.post('/forget.password', forgotPasswordController);

router.get('/test',requireSingnIn, isAmin, testController)

router.get("/user-auth", requireSingnIn, (req,res) => {
     res.status(200).send( {ok: true})
})

export default router;