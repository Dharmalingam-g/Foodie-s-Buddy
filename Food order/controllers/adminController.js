const Admin=require('../models/adminSchema');
const product=require('../models/productSchema');
const user=require('../models/userSchema');
const order=require('../models/orderSchema');
const bcrypt=require('bcryptjs')
const jwt=require("jsonwebtoken")


exports.admin_register=async(req,res,next)=> {
 
  const salt= await bcrypt.genSalt(10);
  const hash= await bcrypt.hash(req.body.password,salt);

  const adm=new Admin( {
    name:req.body.name,
    email:req.body.email,
    password: hash,
    mob_number:req.body.mob_number
  })
  try {
    const saveduser=await adm.save();
    console.log(saveduser);
    res.send(saveduser);
  }
  catch(err) {
    res.status(400).send(err);
  }
};


exports.admin_login=async(req,res,next)=> {
  const user = await Admin.findOne({email: req.body.email});
  if(!user) return res.status(400).send('Email does not exist');
  
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if(!validPass) return res.status(400).send('Invalid password');
  
  
  const token=jwt.sign({_id: user._id}, 'ibc');
  res.json({"token": token, "role":"admin", "currentUserId": user._id});
};

exports.insert_product=async(req,res,next)=> {
    try {
    let pro= new product(req.body);
    let prosave= await pro.save();
    
    res.json(prosave).status(201);
    console.log("product inserted successfully");}
    catch(err) {
          res.send("Couldn't insert product"+ err)
    }      
}

exports.bulk_upload = async (req, res) => {
  if (Array.isArray(req.body)) {
  req.body.forEach(async (item) => {
      const products = new product(item);
      try {
      const prod = await products.save();
      } 
      catch (err) {
      res.end();
      }
  });
 
  console.log("Products uploaded successfully")
  }
  };

  //----------------------------------------------
// exports.bulk_delete = async(req,res) => {
//   if (Array.isArray(req.body)) {
//     req.body.forEach()
//   }
// }
//----------------------------------------------

exports.view_user=async (req,res,next)=> {
      
    try {
      let data = await user.find(req.body).select({password:0});
      res.json(data)
    }catch(data) {
      res.send("couldn't view users"+data);
    }
}
exports.view_user_id=async(req,res,next)=> {
    const id=req.params.id;
    try {
          let data = await user.findById(id, req.body).select({password:0});
          res.json(data)
    }catch(data) {
          res.send("couldn't view user"+data)
    }
}


exports.view_product_id=async(req,res,next)=> {
    const id=req.params.id;
    try {
          let data = await product.findById(id, req.body);
          res.json(data)
    }catch(data) {
          res.json("couldn't view product"+data)

    }
}
exports.view_orders=async (req,res,next)=> {
      
    try {
      let data = await order.find(req.body)
      .populate("user_id",{password:0})
          .populate("product_id").exec();
      res.json(data)  
    }catch(data) { 
      res.send("couldn't view orders");
    }
}

exports.view_products = (req, res) => {
  res.json(res.paginatedResult);
  };
  
  exports.page = function paginatedData(model) {
  return async (req, res, next) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  
  const results = {};
  
  if (startIndex > 0) {
  results.previous = {
  page: page - 1,
  limit: limit,
  };
  }
  
  if (endIndex < (await model.countDocuments().exec())) {
  results.next = {
  page: page + 1,
  limit: limit,
  };
  }
  
  try {
  results.result = await model.find().limit(limit).skip(startIndex).exec();
  res.paginatedResult = results;
  next();
  } catch (err) {
  res.status(500).json({ message: err.message });
  }
  };
  };

exports.view_order_id=async(req,res,next)=> {
    const id=req.params.id;
    try {
          let data = await order.findById(id, req.body)
          .populate("user_id",{password:0})
          .populate("product_id").exec();
          res.json(data)
    }catch(data) {
          res.send("couldn't view order")
    }
}


exports.update_product=async(req,res)=> {

    const id=req.params.id;
    try {
      let data = await product.findByIdAndUpdate(id, req.body, {new: true});
      res.json(data)
    }catch(data) {
      res.json("couldn't update product");
    }
}
exports.delete_product=async (req,res)=> {

    let id=req.params.id;
    //console.log("dhhu");
    try{
    let err=await product.findByIdAndDelete(id);
    res.json("Product Deleted successfully")
    }catch(err){
      res.json("Couldn't delete product" + err)
  
    }
  }
  exports.delete_user=async (req,res)=> {

    let id=req.params.id;
    console.log("dhhu")
    try{
    let err=await user.findByIdAndDelete(id);
    res.send("User Deleted successfully")
    }catch(err){
      res.send("Couldn't delete user" + err)
  
    }
  }