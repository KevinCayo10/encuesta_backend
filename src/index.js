const express = require("express");
const conectarBD = require("./config/db");
const cors = require("cors");
const encuestaRuta = require("./rutas/encuestaRuta");
//crear servidor
const app = express();
const port = process.env.PORT || 3000;

//conectar bd
conectarBD();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extends: false }));

//Llamar a las apis
app.use("/api/encuesta", encuestaRuta);

//Definir ruta inicial
app.get("/", (req, res) => {
  res.send("Servidor activo");
});

//Definir puerto de escucha
app.listen(port, () => {
  console.log("Servidor ejecutando");
});
