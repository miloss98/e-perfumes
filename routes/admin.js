const express = require("express");
const path = require("path");

const rootDirectory = require("../utils/path");

const router = express.Router();

const products = [];

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDirectory, "views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add Product" });
});

router.post("/add-product", (req, res, next) => {
  //   res.redirect("/admin/add-product");
  //  console.log(
  //   `New perfume added: ${req.body.productName}, redirecting to homepage...`,
  // );
  products.push({ title: req.body.productName });
});

exports.routes = router;
exports.products = products;
