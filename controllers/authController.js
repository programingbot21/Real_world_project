import userModel from "../models/userModel.js";
import { comparePassword, hashPassword } from "./../helper/authHelper.js";
import JWT  from 'jsonwebtoken';
export const registerController = async(req, res) => {
    try{
        const   {name,email,password,phone,address} = req.body

        if(!name){
            return res.send({error:'Name is required'})
        }
        if(!email){
            return res.send({error:'Email is required'})
        }
        if(!password){
            return res.send({error:'password is required'})
        }
        if(!phone){
            return res.send({error:'Phone is required'})
        }
        if(!address){
            return res.send({error:'Addreah is required'})
        }

        //check user

        const exisitingUser = await userModel.findOne({email})

        //exisiting user

        if(exisitingUser){
            return res.status(200).send({
                success:true,
                message: 'Already Register please login'
            })
        }
        //reg user
         const hashedPassword = await hashPassword(password)

        const user = await new userModel({
            name,
            email,
            phone,
            address,
            password:hashedPassword }).save()

        res.status(201).send({
            success:true,
            message:"User Register Sucessfully",
            user,
        });

    }catch(error){
     console.log(error)
     res.status(500).send({
        success:false,
        message: 'Error in Registeration',
        error
     })
    }
};

//      post login

export const loginController = async(req,res) =>{
    try{
        const {email,password} = req.body
        //validation
        if(!email || password){
            return res.status(404).send({
                success:false,
                message:'Invalid email or password'
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:`Email is not register`
            });
        }
        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success:false,
                message: `Invalid Password`
            });
        }

        // token
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        res.status(200).send({
            success:true,
            message:`login succesfully`,
            user:{
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,

            },
            token,
        });

    }catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in Login',
            error
        })
    }
};
