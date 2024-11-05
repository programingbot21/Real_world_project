import express from 'express'

// import { isAdmin, requireSingnIn } from '../middleware/authMiddleware.js'

import { isAdmin, requireSignIn } 
from '../middleware/authMiddleware.js';
import { createCategoryController } 
from '../controllers/categoryController.js'

// import { createCategoryController } from '../controllers/categoryController.js'
 
const router = express.Router()

//
router.post("/create-Cate", requireSignIn, isAdmin, createCategoryController);

export default router