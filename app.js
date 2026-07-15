const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRoutes = require("./routes/admin");
const clientRoutes = require("./routes/shop");
const pageNotFound = require("./routes/404");

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(clientRoutes);
app.use(pageNotFound);

app.listen(3000);
