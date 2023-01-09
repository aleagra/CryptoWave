var Sequelize = require("sequelize");
var sequelize = require("../config/mysql.config");
const Joi = require("joi");

var Coin = sequelize.define("coins", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: { type: Sequelize.STRING, unique: true },

  price: Sequelize.STRING,
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = {
  Coin,
};
