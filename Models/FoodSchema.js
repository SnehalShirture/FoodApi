const mongoose = require("mongoose");

const FoodSchema = mongoose.Schema({
  foodname: String,
  foodtype: String,
  foodcategory: String,
  foodimg: String,
  foodprice: Number,
});

module.exports = mongoose.model("Food", FoodSchema);
