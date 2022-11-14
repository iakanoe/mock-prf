const express = require("express");
var bodyParser = require('body-parser')

const app = express();
const port = 8080;

const pedidos = require("./route/pedidos");
const canchas = require("./route/canchas");
const menu = require("./route/menu");
const notificaciones = require("./route/notificaciones");

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.listen(port, function() {
    console.log("listening on " + port)
});

app.use("/pedidos", pedidos);
app.use("/canchas", canchas);
app.use("/menu", menu);
app.use("/notificaciones", notificaciones);