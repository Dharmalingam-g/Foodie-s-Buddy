var express = require('express');
var router = express.Router();
const order=require('../models/orderSchema')

router.get("/orders",orderController.orders);

router.get('/view_order/:id',orderController,view_order)

module.exports=router;