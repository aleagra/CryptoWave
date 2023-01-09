const express = require("express");
const users = express.Router();
const controller = require("../controller/user.controller");
const login = require("../controller/auth.controller");

users.get("/user/", controller.getUser);
users.post("/user/", controller.createUser);
users.get("/user/:id", controller.getByIdUser);
users.put("/user/:id", controller.updateUser);
users.delete("user/:id", controller.deleteUser);
users.post("/user/login", login);

module.exports = users;
