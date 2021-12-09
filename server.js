const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.send("<h1>Hello from </h1>");
});

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`Server started running on ${PORT} ....`);
});
