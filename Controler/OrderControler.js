const Order = require("../Models/OrderSchema");

// Add Order
exports.addOrder = (req, res) => {
  const ord = new Order({
    OrderDate:req.body.OrderDate,
    OrderTotal: req.body.OrderTotal,
    CustId: req.body.CustId,
  })
  ord.save()
  .then((result) => {
    res.status(200).json(result)
  }).catch((err) => {
    res.status(500).send(err)
  });
};

// Get all Order 

exports .getallOrder =(req , res )=>{
    ord .find()
    .populate('CustId' ,"CustName CustMobNo")
    .then((result) => {
        res.status(200).json(result)
      }).catch((err) => {
        res.status(500).send(err)
      });
}