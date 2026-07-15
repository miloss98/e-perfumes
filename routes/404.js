const express = require("express");
const path = require("path");

const rootDirectory = require("../utils/path");

const router = express.Router();

router.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDirectory, "views", "404.html"));
});

module.exports = router;
