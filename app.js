const express = require("express");
const app = express();
const port = 8080;

app.use(express.static("./public/html"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(port);
