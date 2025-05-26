const express = require("express");
const fs = require("node:fs");

const app = express();

app.listen(4000, console.log("Servidor activo"));

app.get("/info", (req, res) => {
    res.send("Bienvenido al servidor de evaluación");
});

app.get("/productos", (req, res) => {
    const productos = JSON.parse(fs.readFileSync("productos.json", "utf-8"));
    res.send(productos);
});
