const Customer = require("../Models/CustomerSchema");

//Add Customer
exports.addCust = (req, res) => {
  const cust = new Customer({
    CustName: req.body.CustName,
    CustAdd: req.body.CustAdd,
    CustMobNo: req.body.CustMobNo,
    CustCity: req.body.CustCity,
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
    cust.find()
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}

// Update Password 

exports. updatepass =(req, res) =>{
    cust.findByIdAndUpdate(
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
    cust.find({_id:req.body._id})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}

// Delete Customer 

exports .deleteCust =(req , res )=>{
    cust.deleteOne({_id:req.body._id})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        res.status(500).send(err);
    });
}