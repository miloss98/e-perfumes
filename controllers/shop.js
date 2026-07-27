const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop page = Homepage",
    });
  });
};

exports.getAllProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/products", {
      prods: products,
      pageTitle: "Products page",
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render("shop/cart", {
    pageTitle: "Your cart",
  });
};

exports.postCart = (req, res, next) => {
  const id = req.body.productId;
  Product.findOne(id, (product) => {
    Cart.addProduct(id, product.price);
  });
  res.redirect("/cart");
};

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    pageTitle: "Your orders",
  });
};

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout page",
  });
};

exports.getSingleProduct = (req, res, next) => {
  const id = req.params.productId;
  Product.findOne(id, (product) => {
    res.render("shop/single-product-page", {
      product: product,
      pageTitle: product.title,
    });
  });
};
