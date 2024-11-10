import express from 'express';
//  import router from './categoryRoutes'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { createProductController, deleteProductController, getProductController, 
    getSingleProductController, productPhotoController, updateProductController } from '../controllers/productController.js';
import formidable from 'express-formidable';

const router = express.Router()

router.post("/create-Product", requireSignIn, isAdmin,formidable(), createProductController);


router.put("/update-Product/:pid", requireSignIn, isAdmin,formidable(), updateProductController);


router.get('/get-product', getProductController)

// single  get product

router.get('/get-product/:slug', getSingleProductController)

router.get('/product-photo/:pid', productPhotoController)

router.delete('/product-del/:pid', deleteProductController)

export default router
