const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({
    message: "Continuous Integration Pipeline is Working!"
  });
});

module.exports = app;