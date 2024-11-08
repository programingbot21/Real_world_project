import express from 'express';
//  import router from './categoryRoutes'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createProductController, getProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router()

router.post("/create-Product", requireSignIn, isAdmin,formidable(), createProductController);

router.get('/get-product', getProductController)


export default router
