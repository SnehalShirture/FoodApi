const Food = require("../Models/FoodSchema");
//Add food
exports.addFood = (req, res) => {
  const food = new Food({
    foodname: req.body.foodname,
    foodtype: req.body.foodtype,
    foodcategory: req.body.foodcategory,
    foodimg: req.body.foodimg,
    foodprice: req.body.foodprice,
  });

  /*
    {
    "foodname":"Masala Dosa",
    "foodtype":"BreakFast",
    "foodcategory":"SouthIndia",
    "foodimg":"String",
    "foodprice":149
    }


     */

  food
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
//get all food
exports.getallfood = (req, res) => {
  Food
    .find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Update

exports.updateFood = (req, res) => {
  Food
    .findByIdAndUpdate(
      { _id: req.body._id },
      { foodprice: req.body.foodprice },
      { new: true }
    )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Delete

exports.deleteFood = (req, res) => {
  Food
    .deleteOne({ _id: req.body._id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Get Food By type

exports.getfoodByType = (req, res) => {
  Food
    .find({ foodtype: req.body.foodtype })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Get Food by Category

exports.getFoodCate = (req, res) => {
  Food
    .find({ foodcategory: req.body.foodcategory })
    .then((result) => {
      
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
