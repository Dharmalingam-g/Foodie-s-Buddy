const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema= new Schema({
    
    name:{
        type:String,
        required:true

    },
    
    email:{
        type:String,
        required:true,
        unique:true 

    },
    
    password:{
        type:String,
        required:true

    },
    mob_number:{
        type:String,
        required:true

    },
   
    created_at:{
        type:Date,
        required:true,
        default: Date.now,
        immutable:true

    },
    
    upDated_at:{
        type:String,
        required:true,
        default: Date.now

    },
    
}
);
module.exports=mongoose.model('admin1',adminSchema);