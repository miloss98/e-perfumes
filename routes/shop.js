const express = require("express");
const path = require("path");

const router = express.Router();

const adminData = require("./admin");

const rootDirectory = require("../utils/path");

router.get("/", (req, res, next) => {
  // res.sendFile(path.join(rootDirectory, "views", "shop.html"));
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Homepage",
    hasProducts: products.length > 0,
  });
});

module.exports = router;
