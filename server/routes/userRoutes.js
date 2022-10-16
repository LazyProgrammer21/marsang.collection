const router = require("express").Router();
// const { signup, signin } = require("../controllers/UserAuth");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/", async (request, response, next) => {
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
});

// router.post("/signup", signup);

module.exports = router;
