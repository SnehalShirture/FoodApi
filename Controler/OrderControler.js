const Order = require("../Models/OrderSchema");

// Add Order
exports.addOrder = (req, res) => {
  const ord = new Order({
    OrderTotal: req.body.OrderTotal,
    Numberofitems: req.body.Numberofitems,
    OrderSize: req.body.OrderSize,
    CustId: req.body.CustId,
    OrderItems: req.body.OrderItems,
  });
  ord
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Get all Order

exports.getallOrder = (req, res) => {
  Order.find()
    .populate("CustId", "CustFirstName CustAdd")
    .populate("OrderItems.FoodId", "foodname foodprice")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getorderById = (req, res) => {
  Order.findOne({ _id:req.body.orderid })
    .populate("CustId")
    .populate("OrderItems.FoodId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

exports.getorderByCustomerId = (req , res)=>{
  Order.find()
  .where("CustId")
  .eq(req.body.custid)
  .where("OrderStatus")
  .eq(req.body.OrderStatus)
  .then((result) => {
    res .status(200).json(result );
  }).catch((err) => {
    res.status(500).send(err);
  });
}

exports.updateOrderStatus=(req,res)=>{
  Order.findByIdAndUpdate(req.body.oid,
    {OrderStatus:req.body.OrderStatus})
    .then((result) => {
      res.status(200).json(result) 
    }).catch((err) => {
      res.status(500).send(err)
    });
}

exports.getOrderStatusById=(req,res)=>{
  Order.find()
  .where('OrderStatus')
  .eq(req.body.OrderStatus)
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(500).send(result)
  });
}