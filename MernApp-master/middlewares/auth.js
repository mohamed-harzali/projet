const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("Auth-token");
    if (!token) return res.status(400).json({ msg: "UNTHORIZED OPERATION1 !" });

    jwt.verify(token, "abc", (err, user) => {
     if (err) return res.status(400).json({ msg: "UNTHORIZED OPERATION2 !" });

      req.user = user;
      next();
    });
  } catch (err) {
    return res.status(500).json({ msg: err.msg });
  }
};

module.exports = auth;
