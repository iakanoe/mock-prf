const express = require("express");

const app = express();
const port = 3000;

const pedidos = require("./src/route/pedidos");
const canchas = require("./src/route/canchas");
const menu = require("./src/route/menu");
const notificaciones = require("./src/route/notificaciones");

app.listen(port, function() {
    console.log("listening on " + port)
});

app.use("/pedidos", pedidos);
app.use("/canchas", canchas);
app.use("/menu", menu);
app.use("/notificaciones", notificaciones);