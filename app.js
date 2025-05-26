const express = require("express");

const app = express();

app.listen(4000, console.log("Servidor activo"));

app.get("/info", (req, res) => {
    res.send("Bienvenido al servidor de evaluación");
})
