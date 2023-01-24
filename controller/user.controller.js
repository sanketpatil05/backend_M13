

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { default: mongoose } = require("mongoose");
const User = require("../model/user.model");

mongoose.set("strictQuery", false);
const signup = async (req, res) => {
  const { name, email, password, role } = req.body;

  bcrypt.hash(password, 5, async function (err, hash) {
    if (err) {
      res.send("something went wrong, please try again later");
    } else {

        let data={
                name:name,
                email: email,
                password: hash,
                role:role
              
        }
      const user = await User.insertMany([data]);
      console.log(user)
      //await user.save();
      res.send(user);
    }
  });
};

const login = async (req, res) => {
  const data = req.body;
  const { email, password } = data;

  const result1 = await User.findOne({ email });

  const hashed_pass = result1.password;

  bcrypt.compare(password, hashed_pass, function (err, result) {
    if (result) {

       
      const token = jwt.sign({ userId: result1._id }, "sanket");
      res.send({ msg: "login success", token: token, user:result1 });
    } else {
      res.send("Login Failed");
    }
  });
};

module.exports = { signup, login };