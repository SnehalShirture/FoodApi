const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const CustomerSchema = mongoose.Schema({
  CustFirstName: String,
  CustLastName: String,
  CustAdd: String,
  CustMobNo: Number,
  CustCity: String,
  CustEmail: String,
  CustPassword: String,
});
CustomerSchema.pre("save", async function (next) {
  try {
    if (this.isModified("CustPassword")) {
      const salt = await bcrypt.genSalt(10);
      this.CustPassword = await bcrypt.hash(this.CustPassword, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
});
module.exports = mongoose.model("Customer", CustomerSchema);
