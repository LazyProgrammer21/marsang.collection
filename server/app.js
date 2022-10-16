const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");
const config = require("./utils/config");
const logger = require("./utils/logger");
const messagesRouter = require("./controllers/messagesRouter");
const userRouter = require("./routes/userRoutes");
const middleware = require("./utils/middleware");

const app = express();

const url = config.MONGODB_URI;
mongoose.connect(url).then(() => {
  // eslint-disable-next-line no-console
  logger.info("DB Connected");
});
app.use(cors());
app.use(express.json());
app.use(express.static("dist"));
app.use(middleware.tokenExtractor);
// app.use(middleware.unknownEndpoint);
// app.use(middleware.errorHandler);
// app.use("/api/messages", messagesRouter);
app.use("/api/signup", userRouter);
app.use("/api/signin", userRouter);
// sends index.html
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});
module.exports = app;
