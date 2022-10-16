const mongoose = require("mongoose");

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
    },
    gender: {
      type: String,
    },
    role: {
      type: String,
      enum: ["User", "Admin", "guest"],
      default: "User",
    },
    phoneNumber: {
      type: String,
      required: true,
      max: 12,
      min: 3,
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

module.exports = mongoose.model("User", userSchema);
