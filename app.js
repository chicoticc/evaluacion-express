const express = require("express");
const fs = require("node:fs");

const app = express();

app.listen(4000, console.log("Servidor activo"));

app.use(express.json());

app.get("/info", (req, res) => {
    res.send("Bienvenido al servidor de evaluación");
});

app.get("/productos", (req, res) => {
    const productos = JSON.parse(fs.readFileSync("productos.json"));
    res.send(productos);
});

app.post("/productos", (req, res) => {
    const productoIngresado = req.body;
    const productos = JSON.parse(fs.readFileSync("productos.json"));
    productos.push(productoIngresado);
    fs.writeFileSync("productos.json", JSON.stringify(productos));
    res.send("Producto agregado exitosamente");
});
