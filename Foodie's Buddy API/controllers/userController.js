const user = require('../models/userSchema');
const product = require('../models/productSchema');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const order = require('../models/orderSchema');
const mongoose = require("mongoose");



exports.register_user = async (req, res, next) => {

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(req.body.password, salt);

  const usr = new user({
    name: req.body.name,
    email: req.body.email,
    password: hash,

  })
  try {
    const saveduser = await usr.save();
    console.log(saveduser);
    res.send(saveduser);
  }
  catch (err) {
    res.status(400).send(err);
  }

};
exports.user_login = async (req, res, next) => {

  const usr = await user.findOne({ email: req.body.email });
  if (!usr) return res.status(400).send('Email does not exist');

  const validPass = await bcrypt.compare(req.body.password, usr.password);
  if (!validPass) return res.status(400).send('Invalid password');


  const token = jwt.sign({ _id: usr._id }, 'key');
  res.json({ "token": token, "role": "user", "currentUserId": usr._id });
  // res.end();
};

exports.update_user = async (req, res) => {

  const id = req.params.id;
  console.log(req.params.id)

  try {
    let data = await user.findByIdAndUpdate(id, req.body);
    res.send("user updated successfully")
  } catch (data) {
    res.send("couldn't update user");
  }
}
exports.view_user = async (req, res, next) => {
  const id = req.params.id;
  try {
    let data = await user.findById(id, req.body).select({ password: 0 });
    res.json(data)
  } catch (data) {
    res.send("couldn't view user")
  }
}

exports.delete_user = async (req, res) => {

  let id = req.params.id;
  try {
    let data = await user.findByIdAndDelete(id);
    res.send("User Deleted successfully")
  } catch (data) {
    res.send("Couldn't delete user" + data)

  }
}
exports.create_orders = async (req, res) => {

  const prod = await product.findById(req.body.product_id);
  let price = 1
  if (prod)
    price = prod.price;
  const ord = new order({
    user_id: req.user,
    product_id: req.body.product_id,
    quantity: req.body.quantity,
    total_amount: req.body.quantity * price
  });

  try {
    const savedorder = await ord.save();
    res.status(200).json(savedorder);
  } catch (err) {
    res.status(500).json(err);

  }

}

exports.bulk_order = async (req, res) => {
  if (Array.isArray(req.body)) {
    for (let item of req.body) {
      // req.body.forEach(async (item) => {
      const products = await product.findById(item.product_id)
      console.log(products)
      const pri = products.price * item.quantity;
      console.log(pri)
      const orders = new order({
        user_id: req.user,
        product_id: item.product_id,
        quantity: item.quantity,
        total_amount: pri.toString()

      });
      try {
        const ord = await orders.save();
      }
      catch (err) {
        res.send(err);
      }
    }

    res.send("ordered successfully")
  }
};


exports.view_orders = async (req, res, next) => {

  try {
    console.log(req.user)
    let data = await order.find({ user_id: req.id });
    console.log()
    res.json(data)
  }
  catch (err) {
    res.send(err);
  }
},
  exports.view_profile = async (req, res) => {
    try {
      console.log(req.user)
      let data = await user.findById(req.user, { password: 0 });
      res.json(data)
    }
    catch (err) {
      res.json(err);
    }
  }



exports.view_order_id = async (req, res, next) => {
  const id = req.params.id;
  try {
    let data = await order.findById(id)
      .populate("user_id", { password: 0 })
      .populate("product_id").exec();
    res.json(data)
  } catch (data) {
    res.send("couldn't view order")
    console.log(data)
  }
}




exports.view_products = async (req, res, next) => {

  try {
    let data = await product.find(req.body);
    res.json(data)
  } catch (data) {
    res.send("couldn't view products");
    console.log(data)
  }
}






