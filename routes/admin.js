const express = require("express");
const path = require("path");

const router = express.Router();
const rootDirectory = require("../utils/path");

router.get("/add-perfume", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "views", "add-perfume.html"));
});

router.post("/add-perfume", (req, res, next) => {
  console.log(
    `New perfume added: ${req.body.perfumeName}, redirecting to homepage...`,
  );
  //   res.redirect("/admin/add-perfume");
});

module.exports = router;
