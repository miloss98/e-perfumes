const express = require("express");
const path = require("path");

const router = express.Router();

const rootDirectory = require("../utils/path");

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "views", "shop.html"));
});

module.exports = router;
