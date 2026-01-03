const express = require("express");
const route = express.Router();

route.get("/", (req, res) => {
  res.send("API is working properly");
});

module.exports = route;