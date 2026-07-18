const express = require("express");
const path = require("path");

const rootDirectory = require("../utils/path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(rootDirectory, "views", "add-product.html"));
});

router.post("/add-product", (req, res, next) => {
  console.log(
    `New perfume added: ${req.body.productName}, redirecting to homepage...`,
  );
  //   res.redirect("/admin/add-product");
});

module.exports = router;
