const product=require('../models/productSchema');


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
exports.view_products=async (req,res)=> {
  try {
    let data = await product.find(req.params);
    res.json(data)   
  }catch(data) {
    res.send("couldn't view products");
  }
}
exports.view_product_id=async(req,res,next)=> {
  const id=req.params.id;
  try {
        let data = await product.findById(id, req.body);
        res.json(data)
  }catch(data) {
        res.send("couldn't view product")
  }
}
exports.update_product=async(req,res)=> {

  const id=req.params.id;
  console.log(req.params.id)
  
  try {
    let data = await product.findByIdAndUpdate(id, req.body);
    res.send("product updated successfully")
  }catch(data) {
    res.send("couldn't update product");
  }
}

exports.delete_product=async (req,res)=> {

  let id=req.params.id;
  console.log("dhhu");
  try{
  let err=await product.findByIdAndDelete(id);
  res.send("Product Deleted successfully")
  }catch(err){
    res.send("Couldn't delete product" + err)

  }
}