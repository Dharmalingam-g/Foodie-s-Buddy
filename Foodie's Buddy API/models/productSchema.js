const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema= new Schema({

  
    product:{
        type:String,
        unique:true,
        required:true
    },
    price:{
        type:Number,
        required:true

    },
    
    stock:{
        type:Boolean,
        required:true

    },
    
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5

    },
    
    created_at:{
        type:Date,
        required:true,
        default:Date.now,
        immutable:true

    },
    
    updated_at:{
        type:Date,
        default:Date.now,
        required:true

    },
    
},
);
module.exports=mongoose.model('product',productSchema);