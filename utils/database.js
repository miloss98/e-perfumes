const Sequelize = require("sequelize");

const sequelize = new Sequelize("e-perfumes", "root", "kacavenda000", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
