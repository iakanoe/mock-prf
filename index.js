const express = require("express");
var bodyParser = require('body-parser')

const app = express();
const port = 8080;

const pedidos = require("./src/pedidos");
const canchas = require("./src/canchas");

app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.use("/pedidos", pedidos);
  app.use("/canchas", canchas);

app.listen(port, function() {
    console.log("listening on " + port)
});