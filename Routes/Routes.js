const express = require("express");
const router = express.Router();
// Food 
const FoodControler = require("../Controler/FoodControler");
router.post("/addFood", FoodControler.addFood);
router.get("/getallfood", FoodControler.getallfood);
router.get("/getfoodByType", FoodControler.getfoodByType);
router.get("/getFoodCate", FoodControler.getFoodCate);


// Customer 

const  CustomerController = require ("../Controler/CustomerControler")
router.post("/addCust",CustomerController.addCust);
router.get("/getallCust",CustomerController.getallCust);
router.post("/updatepass",CustomerController.updatepass);
router.post("/findCust",CustomerController.findCust);
router.post("/deleteCust",CustomerController.deleteCust);
router.post("/doLogin",CustomerController.doLogin);


// Order 

const OrderController = require("../Controler/OrderControler")
router.post("/addOrder",OrderController.addOrder);
router.get("/getallOrder",OrderController.getallOrder);
router.post("/getorderById",OrderController.getorderById);


module.exports = router;
