const { User } = require("../model/user.model");
const { Coin } = require("../model/coin.model");
const databaseMysql = require("./mysql.config");

User.sync();
Coin.sync();
databaseMysql.sync();
