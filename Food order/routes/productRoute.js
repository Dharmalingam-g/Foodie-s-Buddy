var express = require('express');
var router = express.Router();
const productController=require('../controllers/productController');


router.post('/insert_product',productController.insert_product);

router.get("/view_products",productController.view_products);

router.get('/view_product/:id',productController.view_product_id);

router.put("/update_product/:id",productController.update_product);

router.delete("/delete_product/:id",productController.delete_product);


module.exports=router;