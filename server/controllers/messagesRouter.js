const messagesRouter = require("express").Router();

/**
 * Simple example for backend
 */
let messages = [];
let simpleId = 0;

messagesRouter.get("/", async (req, res) => {
  res.send(messages);
});

messagesRouter.post("/", async (req, res) => {
  simpleId += 1;
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({
      error: "Message is required",
    });
  }

  const newMessage = {
    id: simpleId,
    body: message,
  };
  messages.push(newMessage);
  res.send(newMessage);
});

messagesRouter.delete("/:id", async (req, res) => {
  messages = messages.filter(
    (message) => Number(message.id) !== Number(req.params.id)
  );
  res.sendStatus(200);
});

module.exports = messagesRouter;
