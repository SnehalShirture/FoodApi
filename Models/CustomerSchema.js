const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    CustFirstName:String,
    CustLastName:String,
    CustAdd:String,
    CustMobNo:Number,
    CustCity:String,
    CustEmail:String,
    CustPassword:String

});
module.exports = mongoose.model("Customer", CustomerSchema)