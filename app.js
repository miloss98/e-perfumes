const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const clientRoutes = require("./routes/shop");
const pageNotFound = require("./routes/404");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(clientRoutes);
app.use(pageNotFound);

app.listen(3000);
