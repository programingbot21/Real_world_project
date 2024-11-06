import categoryModel from "../models/categoryModel.js";
import slugify from "slugify"

export const createCategoryController = async(req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
          return res.status(401).send({ message: "Name is required" });
        }
        const existingCategory = await categoryModel.findOne({ name });
        if (existingCategory) {
          return res.status(200).send({
            success: false,
            message: "Category Already Exisits",
          });
        }
        const category = await new categoryModel({
          name,
          slug: slugify(name),
        }).save();
        res.status(201).send({
          success: true,
          message: "new category created",
          category,
        });
      } catch (error) {
        console.log(error);
        res.status(500).send({
          success: false,
          error,
          message: "Errro in Category",
        });
      }
};

// update 
export const updateCategoryController = async (req, res) =>{
  try {
  
    const { name } = req.body;
    const { id } = req.params;
    const category = await categoryModel.findByIdAndUpdate(
      id,
      { name, slug: slugify(name) },
      { new: true }
    )
      res.status(200).send({
        success:true,
        message: "Category Upadte Successfully",
        category,
      })

  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      error,
      message:'Error white updating category'
    })
  }
}

// get categary

export const categoryController = async (req, res) => {

  try {
    const categary = await categoryModel.find({});
    res.status(200).send({
      success: true,
      message: 'All Category List',
      categary
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      error,
      message: "Error while getting all categories",
    });
  }
}; 

export const singleCategoryController = async(req,res) =>{
  try {
   
    const categary = await categoryModel.findOne({slug:req.params.slug})
    res.status(200).send({
      success:true,
      message:'Get Single category Sucessfully',
      categary
    })


  } catch (error) {
    console.log(error)
    res.status(500).send({
      success:false,
      error,
      message:'Error while getting all categories'
    })
  }
}

// delete category

export const deleteCategoryController = async(req, res) =>{
  try {
    const {id} = req.params
    await  categoryModel.findByIdAndDelete(id)
    res.status(200).send({
      success:true,
      message: 'Category Deleted SuccessFully'
    })
  } catch (error) {
    console.log(error)
    res.status(500).send({
      success: false,
      message: 'Error in delete Category',
      error
    })
  }
}