const User = require("../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const SALT_ROUNDS = 6

// functions here

const signup = async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, SALT_ROUNDS);
        const user = await User.create({
          fname: req.body.firstName,
          lname: req.body.lastName,
          email: req.body.email,
          password: hashedPassword
        });
        const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
        res.status(200).json(token);
      } catch (err) {
        res.status(400).json(err);
      }
}

const login = async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        if (!(await bcrypt.compare(req.body.password, user.password)))
          throw new Error();
        const token = jwt.sign({ user }, process.env.SECRET, { expiresIn: "24h" });
        res.status(200).json(token);
      } catch (err) {
        res.status(400).json("Bad Credentials");
      }
}


module.exports = {
    // function names here to export
    signup,
    login
}