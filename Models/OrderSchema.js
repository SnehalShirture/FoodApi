const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  OrderDate: { type: Date, default: new Date() },
  OrderTotal: Number,
  OrderSize: Number,
  Numberofitems:Number,
  OrderStatus:{type:String, default:"Pending"},
  CustId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  OrderItems: [
    {
      FoodId: { type: mongoose.Schema.Types.ObjectId, ref: "Food" },
      Qty: Number,
    },    
  ],
});

module.exports = mongoose.model("Order", OrderSchema);
