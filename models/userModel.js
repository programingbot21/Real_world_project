import mongoose from "mongoose";

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        requried:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    },
    phone:{
       type:String ,
       requried:true,
    },
    // address:{
    //     type:String,
    //     required:true
    // },

    question:{
        type:String,
        require:true
    },
    role:{
        type:Number,
        default:0,
    }
},{ timestamps:true}
);

export default mongoose.model('users',userSchema)