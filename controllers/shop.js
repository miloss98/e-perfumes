const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getIndex = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/index", {
        prods: products,
        pageTitle: "Shop page = Homepage",
      });
    })
    .catch((err) => console.log(err));
};

exports.getAllProducts = (req, res, next) => {
  Product.findAll()
    .then((products) => {
      res.render("shop/products", {
        prods: products,
        pageTitle: "Products page",
      });
    })
    .catch((err) => console.log(err));
};

exports.getCart = (req, res, next) => {
  Cart.getCart((cart) => {
    Product.fetchAll((products) => {
      const cartProducts = [];
      for (product of products) {
        const cartProductData = cart.products.find(
          (prod) => prod.id === product.id,
        );
        if (cart.products.find((prod) => prod.id === product.id)) {
          cartProducts.push({ productData: product, qty: cartProductData.qty });
        }
      }
      res.render("shop/cart", {
        pageTitle: "Your cart",
        products: cartProducts,
      });
    });
  });
};

exports.postCart = (req, res, next) => {
  const id = req.body.productId;
  Product.findOne(id, (product) => {
    Cart.addProduct(id, product.price);
  });
  res.redirect("/cart");
};

exports.postCartDeleteProduct = (req, res, next) => {
  const id = req.body.productId;
  Product.findOne(id, (product) => {
    Cart.removeFromCart(id, product.price);
    res.redirect("/cart");
  });
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
  Product.findByPk(id)
    .then((product) => {
      res.render("shop/single-product-page", {
        product: product,
        pageTitle: product.title,
      });
    })
    .catch((err) => console.log(err));
};
