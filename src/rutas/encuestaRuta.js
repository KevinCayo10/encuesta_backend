const express = require("express");
const encuestaControlador = require("../controlador/encuestaControlador");

const encuestaRuta = express.Router();
encuestaRuta.post("/", encuestaControlador.registrar);

module.exports = encuestaRuta;
