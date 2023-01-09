var Sequelize = require("sequelize");
var sequelize = require("../config/mysql.config");
const Joi = require("joi");

var User = sequelize.define("users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: { type: Sequelize.STRING, unique: true },
  firstname: Sequelize.STRING,
  lastname: Sequelize.STRING,
  email: Sequelize.STRING,
  balance: { type: Sequelize.FLOAT, defaultValue: "1000" },
  password: Sequelize.STRING,
  status: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  list: { type: Sequelize.JSON, defaultValue: [] },
});

module.exports = {
  User,
};
