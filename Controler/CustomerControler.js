const Customer = require("../Models/CustomerSchema");

//Add Customer
exports.addCust = (req, res) => {
  const cust = new Customer({
    CustFirstName: req.body.CustFirstName,
    CustLastName: req.body.CustLastName,
    CustAdd: req.body.CustAdd,
    CustMobNo: req.body.CustMobNo,
    CustCity: req.body.CustCity,
    CustEmail: req.body.CustEmail,
    CustPassword: req.body.CustPassword
  });
  cust.save()
  .then((result) => {
    res.status(200).json(result);
  }).catch((err) => {
    res.status(500).send(err);
  });
};


//Get all Customer 

exports.getallCust = (req , res)=>{
    Customer.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}

// Update Password 

exports. updatepass =(req, res) =>{
    Customer.findByIdAndUpdate(
        {_id:req.body._id},
        {CustPassword:req.body.CustPassword},
        {new:true}
    )

    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send (err);
    });
};

// Find Customer  by id 

exports.findCust =(req , res )=>{
    Customer.find({_id:req.body._id})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}

// Delete Customer 

exports .deleteCust =(req , res )=>{
    Customer.deleteOne({_id:req.body._id})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}