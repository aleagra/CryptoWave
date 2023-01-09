require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRoutes = require("./routes/index.route.js");
require("./config/utils.bs");

const port = process.env.SERVER_PORT;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(indexRoutes);

app.listen(port, () =>
  console.log("connection established in the port " + port)
);
