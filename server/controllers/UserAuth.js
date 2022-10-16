const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("../utils/config");
const jwt = require("jsonwebtoken");

exports.signup = async (request, response, next) => {
  console.log(request.body);
  try {
    const { Fname, email, password, phone } = request.body;

    if (Fname.length < 3 || password.length < 3) {
      response.status(400).json({
        error: "error coz FirstName and password <3 and Email is not unique ",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      response.status(400).json({ error: "User already exits with Email" });
    }

    const saltRounds = 10;
    const hash_password = await bcrypt.hash(password, saltRounds);

    const user = new User({
      Fname,
      email,
      hash_password,
      phone,
    });

    const savedUser = user.save((error, data) => {
      //database ko error aayo vane yo response auxa
      if (error) {
        console.log(error);
        return response.status(400).json({
          message: "Something went wrong!",
        });
      }
      if (data) {
        return response.status(201).json({
          user: data,
        });
      }
    });
    response.status(201).json(savedUser);
  } catch (error) {
    next(error);
  }
};

exports.signin = async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  User.findOne({ email }).exec((error, user) => {
    if (error) return res.status(400).json({ error });

    if (!user) {
      return res.status(400).json({ error: "User not found!" });
    }
    if (user) {
      const isCorrect = bcrypt.compare(password, user.hash_password);
      if (isCorrect) {
        const userForToken = {
          email: user.Email,
          password: user.password,
          id: user._id,
        };
        const token = jwt.sign(userForToken, config.SECRET, {
          expiresIn: "1h",
        });
        res.status(200).send({
          token,
          email: user.Email,
          name: user.firstName,
          role: user.role,
        });
      } else {
        return res.status(400).json({ error: "Password wrong" });
      }
    } else {
      return res.status(400).json({ message: "Something went Wrong...!" });
    }
  });
};
