const User = require("../models/userSchema");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userCtrl = {
  register: async (req, res) => {
    try {
      //valid form email and PassWord
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.mapped() });

      const { name, email, Password } = req.body;

      const user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "this email already exist !" });

      //hash password
      const hash = await bcrypt.hash(Password, 10);

      //create newUser
      const newUser = new User({
        name,
        email,
        Password: hash,
      });

      //save in DB
      const registredUser = await newUser.save();
      const payload = {
        id: registredUser._id,
      };

      //create json web token
      const accessToken = await jwt.sign(payload, "abc");

      /*  res.json({msg : "register Success"}) */
      res.json({ accessToken });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.mapped() });

      const { email, Password } = req.body;

      const user = await User.findOne({ email });
      if (!user)
        return res
          .status(400)
          .json({ msg: "User does not exist !! register before " });

      const isMatch = await bcrypt.compare(Password, user.Password);

      if (!isMatch) return res.status(400).json({ msg: "wrong password" });

      /* res.json({msg:"login success"}) */

      const payload = {
        id: user._id,
      };
      const accessToken = await jwt.sign(payload, "abc");
      res.json({ accessToken, role: user.Role });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUserInfo: async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select({ Password: 0 });
      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
};

module.exports = userCtrl;
