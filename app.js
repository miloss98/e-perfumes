const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

const adminData = require("./routes/admin");
const clientRoutes = require("./routes/shop");
const pageNotFound = require("./routes/404");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(clientRoutes);
app.use(pageNotFound);

app.listen(3000);
