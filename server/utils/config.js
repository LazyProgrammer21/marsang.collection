/* eslint-disable */
//configuration to db

require("dotenv").config();

const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
console.log(PORT);
const MONGODB_URI =
  process.env.NODE_ENV === "test"
    ? process.env.MONGODB_URI_TEST
    : process.env.MONGODB_URI;

module.exports = {
  PORT,
  MONGODB_URI,
  SECRET,
};
