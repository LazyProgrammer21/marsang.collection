const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./utils/config");
const logger = require("./utils/logger");
const messagesRouter = require("./controllers/messagesRouter");
const userRouter = require("./routes/user");

const app = express();

const url = config.MONGODB_URI;
mongoose.connect(url).then(() => {
  // eslint-disable-next-line no-console
  logger.info("DB Connected");
});
app.use(cors());
app.use(bodyParser());
// we will use body-parser library instead of express.json()
// app.use(express.json());
app.use(express.static("dist"));
app.use("/api/messages", messagesRouter);
app.use("/api", userRouter);
// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
module.exports = app;
