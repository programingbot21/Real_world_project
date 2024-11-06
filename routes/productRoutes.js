import express from 'express';
//  import router from './categoryRoutes'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createProductController } from '../controllers/productController.js';

const router = express.Router()

router.post("/create-Product", requireSignIn, isAdmin, createProductController);

export default router
