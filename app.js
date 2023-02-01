const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/html/index.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "/public/html/contact.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/html/about.html");
});

app.use((req, res, next) => {
  res.status(404).sendFile(__dirname + "/public/html/404.html");
});

app.listen(port);
