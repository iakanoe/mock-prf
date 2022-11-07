const express = require("express");

const app = express();
const port = 3000;

const pedidos = require("./src/pedidos");
const canchas = require("./src/canchas");

app.listen(port, function() {
    console.log("listening on " + port)
});

app.use("/pedidos", pedidos);
app.use("/canchas", canchas);