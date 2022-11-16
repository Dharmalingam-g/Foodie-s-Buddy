var express = require('express');
var router = express.Router();
const products=require("../models/productSchema");
const adminController=require('../controllers/adminController');
const verifyAdmin=require('../middleware/adminVerification');

router.post('/admin_register',adminController.admin_register);

router.post('/admin_login',adminController.admin_login);

router.post('/insert_product',verifyAdmin,adminController.insert_product);

router.post('/bulk_upload',verifyAdmin,adminController.bulk_upload);

router.get("/view_user",verifyAdmin,adminController.view_user);

router.get('/view_user/:id',verifyAdmin,adminController.view_user_id);

router.get("/view_products",verifyAdmin,adminController.page(products),adminController.view_products);

router.get('/view_product/:id',adminController.view_product_id);

router.get("/view_orders",verifyAdmin,adminController.view_orders);

router.get('/view_order/:id',verifyAdmin,adminController.view_order_id);

router.put("/update_product/:id",verifyAdmin,adminController.update_product);

router.delete("/delete_product/:id",verifyAdmin,adminController.delete_product);

router.delete("/delete_user/:id",verifyAdmin,adminController.delete_user);

module.exports = router;







