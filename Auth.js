const jwt = require('jsonwebtoken');

exports.auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization;
    let cookieToken = req.cookies.token;

    if (!token && !cookieToken) {
      return res.status(401).send({ message: "Access denied. 401 Unauthorized request" });
    }

    token = token ? token.split(' ')[1] : cookieToken;

    if (!token || token === 'null') {
      return res.status(401).send("Unauthorized request. Token value is missing");
    }

    const verifiedUser = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifiedUser) {
      return res.status(401).send("User not verified");
    }

    req.user = verifiedUser;
    next();
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(400).send("Invalid Token");
  }
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    const userRole = req.user && req.user.UserRole;

    if (!userRole || !roles.includes(userRole)) {
      return res.status(403).json({
        message: `Your Role: ${userRole} is not allowed to access this resource`,
      });
    }

    next();
  };
};
