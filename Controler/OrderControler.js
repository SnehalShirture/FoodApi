const Order = require("../Models/OrderSchema");

// Add Order
exports.addOrder = (req, res) => {
  const ord = new Order({
    OrderTotal: req.body.OrderTotal,
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
  Order.find(
    { _id: req.body.OrderId}
  )
.populate("CustId")
.populate("OrderItems.FoodId")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
