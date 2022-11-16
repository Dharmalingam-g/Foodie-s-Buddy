const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema= new Schema({
    
    user_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
    },
    
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'product',
        required:true

    },
    
    total_amount:{
        type:String,
        // required:true

    },
    quantity :{
        type:Number,
        required:true
    },
},
{
    timestamps:true,
}
);
module.exports=mongoose.model('order',orderSchema);