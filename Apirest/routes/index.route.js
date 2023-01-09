const mysqlUsersRouter = require("../routes/user.route");
const mysqlCoinsRouter = require("../routes/coin.route");

const express = require("express");

const indexRoutes = express.Router();

indexRoutes.use(mysqlUsersRouter);
indexRoutes.use(mysqlCoinsRouter);

module.exports = indexRoutes;
