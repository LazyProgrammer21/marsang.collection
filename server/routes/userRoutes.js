const router = require("express").Router();
// const { signup, signin } = require("../controllers/UserAuth");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

router.post("/", async (request, response, next) => {
  console.log(request.body);

  try {
    const { firstName, Email, password, phoneNumber } = request.body;

    if (firstName.length < 3 || password.length < 3) {
      return response.status(400).json({
        error: "error coz FirstName and password <3 and Email is not unique ",
      });
    }

    const existingUser = await User.findOne({ Email });
    if (existingUser) {
      return response
        .status(400)
        .json({ error: "User already exits with Email" });
    } else {
      const saltRounds = 10;
      const hash_password = await bcrypt.hash(password, saltRounds);

      const user = new User({
        firstName,
        Email,
        hash_password,
        phoneNumber,
      });

      const savedUser = await user.save();
      response.status(201).json(savedUser);
      //database ko error aayo vane yo response auxa
    }
  } catch (error) {
    next(error);
  }
});

// router.post("/signup", signup);

module.exports = router;
