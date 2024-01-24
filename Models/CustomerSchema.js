const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    CustName:String,
    CustAdd:String,
    CustMobNo:Number,
    CustCity:String,
    CustPassword:String

});
module.exports = mongoose.model("Customer", CustomerSchema)