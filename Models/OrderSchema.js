const mongoose = require ('mongoose')

const OrderSchema = mongoose.Schema({
    OrderDate :{type:Date,default:new Date},
    OrderTotal:Number,
    CustId:{type:mongoose.Schema.Types.ObjectId,ref:"Customer"}
})


exports .module = mongoose.model("Order" , OrderSchema)