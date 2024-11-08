
import productModel from "../models/productModel.js"
import fs from 'fs'
import slugify from "slugify";
export const createProductController = async(req, res) => {
    try {
        const {name,slug,description,price,category,quantity,shipping } = req.fields;
        const {photo} = req.files
        switch(true){
            case !name:
                return res.status(500).send({error: 'Name is required'});
            case !description:
            return res.status(500).send({error: 'description is required'});
            case !price:
                return res.status(500).send({error: 'price is required'});
            case !category:
                    return res.status(500).send({error: 'category is required'});
            case !quantity:
                return res.status(500).send({error: 'Quantity is required'});
            case !photo && photo.size > 1000000:
                 return res.status(500).send({error: 'shipping is required'});
         
                    
        }


        const products = new productModel({...req.fields, slug: slugify(name) })

        if(photo){
            products.photo.data = fs.readFileSync(photo.path);
            products.photo.contentType = photo.type;

        }
        await products.save();
        res.status(201).send({
            success:true,
            message: 'Product Create Successfully',
            products
        })


    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message: 'Product in Error'
          
        })
        
    }
};


// get all Product

export const getProductController = async( req ,res) => {
    try {
        const products = await productModel
        .find({})
        
        .select("-photo")
        .limit(12)
        .sort({ createdAt: -1});
        res.status(200).send({
            success: true,
            message: 'All product',
            products
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error is Getting Product ',
            error
        })
    }
};