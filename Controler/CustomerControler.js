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
    CustPassword: req.body.CustPassword,
  });
  cust
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

//Get all Customer

exports.getallCust = (req, res) => {
  Customer.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Update Password

exports.updatepass = (req, res) => {
  Customer.findByIdAndUpdate(
    { _id: req.body._id },
    { CustPassword: req.body.CustPassword },
    { new: true }
  )
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

/*


 */
// Find Customer  by id

exports.findCust = (req, res) => {
  Customer.findOne({ _id: req.body._id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

// Delete Customer

exports.deleteCust = (req, res) => {
  Customer.deleteOne({ _id: req.body._id })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};
// Login Customer
exports.doLogin = async (req, res) => {
  const { CustEmail, CustPassword } = req.body;
  try {
    const user = await Customer.findOne({ CustEmail });
    if (!user) {
      return res.status(400).send({ message: "Invalid email or password" });
    }
    const isPasswordValid = await bcrypt.compare(
      CustPassword,
      user.CustPassword
    );

    if (!isPasswordValid) {
      return res.status(400).send({
        message: `Invalid EmailPassword ${CustPassword} , ${user.CustPassword} , ${isPasswordValid}`,
      });
    }
    // console.log(process.env.JWT_SECRET,process.env.JWT_EXPIRE)
    const token = jwt.sign(
      { userId: user._id, userId: user.CustFirstName },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRE }
    );
    res.cookie("token", token, { httpOnly: true, maxAge: 3600000 });
    return res.status(201).json({
      data: user,
      token,
    });
  } catch (error) {
    console.error("Error during login", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// exports.doLogin = (req, res) => {
//   Customer.findOne({
//     CustEmail: req.body.CustEmail,
//     CustPassword: req.body.CustPassword,
//   })
//     .then((result) => {
//       if (result) {
//         res.status(200).json({
//           data: result,
//           success: true,
//         });
//       } else {
//         res.status(200).json({
//           data: result,
//           success: false,
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).send(err);
//     });
// };
