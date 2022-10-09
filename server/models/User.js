const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: false,
      trim: true,
      min: 3,
      max: 20,
    },
    Email: {
      type: String,
      required: true,
      //trim le white space remove garxa
      trim: true,
      //pk
      unique: true,
      lowercase: true,
    },
    hash_password: {
      type: String,
      required: true,
      max: 20,
      min: 5,
    },
    gender: {
      type: String,
    },
    role: {
      type: String,
      enum: ["user", "admin", "guest"],
      default: "admin",
    },
    phoneNumber: {
      type: String,
      min: 10,
      max: 14,
      trim: true,
      required: true,
    },
    profilePic: {
      type: String,
    },
    Address: {
      type: String,
      max: 30,
    },
    Status: {
      type: String,
    },
  },
  //timestamps is for usercreated at--field
  { timestamps: true }
);
//virtual field for password where bcrypt library hashes the password
// https://www.npmjs.com/package/bcrypt
userSchema.virtual("password").set(function (password) {
  this.hash_password = bcrypt.hashSync(password, 10);
});

userSchema.methods = {
  authenticate: function (password) {
    return bcrypt.compareSync(password, this.hash_password);
  },
};

module.exports = mongoose.model("User", userSchema);
