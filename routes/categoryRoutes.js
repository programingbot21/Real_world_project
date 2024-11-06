import express from 'express'
import { isAdmin, requireSignIn } from '../middleware/authMiddleware.js';
import { categoryController, createCategoryController,
     deleteCategoryController,
     singleCategoryController, updateCategoryController } from '../controllers/categoryController.js'


 
const router = express.Router()

// create route
router.post("/create-Cate", requireSignIn, isAdmin, createCategoryController);


// update route

router.put("/update-category/:id", requireSignIn, isAdmin, updateCategoryController)


// get All Categary

router.get('/get-category', categoryController)

// single Category

router.get('/single-category/:slug',singleCategoryController)


// delete category

router.delete('/delete-category/:id', requireSignIn, isAdmin, deleteCategoryController)

export default router