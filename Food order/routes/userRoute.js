var express = require('express');
var router = express.Router();
const verifyUser=require('../middleware/userVerification')
const userController=require('../controllers/userController');


router.post('/register_user',userController.register_user);

router.post('/user_login',userController.user_login);

router.put("/update_user/:id",verifyUser,userController.update_user);

router.get('/view_user/:id',verifyUser,userController.view_user);

router.delete("/delete_user/:id",verifyUser,userController.delete_user);

router.post("/create_orders",verifyUser,userController.create_orders);

router.get("/view_profile",verifyUser,userController.view_profile);

router.post("/bulk_order",verifyUser,userController.bulk_order);

router.get("/view_orders",verifyUser,userController.view_orders);

router.get("/view_products",verifyUser,userController.view_products);

router.get('/view_order/:id',verifyUser,userController.view_order_id);

module.exports=router;