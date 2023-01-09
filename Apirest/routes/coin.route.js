const express = require("express");
const coins = express.Router();
const controller = require("../controller/coin.controller");

coins.get("/coin/", controller.getCoin);
coins.post("/coin/", controller.createCoin);
coins.get("/coin/:id", controller.getByIdCoin);
coins.put("/coin/:id", controller.updateCoin);
coins.delete("coin/:id", controller.deleteCoin);

module.exports = coins;
