const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("MercadoAndino v1 - instancia " + require("os").hostname()));
app.get("/health", (req, res) => res.status(200).send("ok"));

// endpoint base para la subida de archivos (S3)
app.get("/api/upload-url", (req, res) => {
    res.status(200).json({ message: "Endpoint de S3 preparado para MercadoAndino" });
});

app.listen(process.env.PORT || 80);
