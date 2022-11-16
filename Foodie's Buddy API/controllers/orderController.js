const order=require('../models/orderSchema');

exports.orders=async (req,res,next)=> {
      
    try {
      let data = await order.find(req.body);
      res.json(data)
    }catch(data) {
      res.send("couldn't view orders");
    }
    }

exports.view_order=async(req,res,next)=> {
    const id=req.params.id;
    try {
          let data = await order.findById(id, req.body);
          res.json(data)
    }catch(data) {
          res.send("couldn't view order")
    }
}

