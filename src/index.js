const express = require("express");
const conectarBD = require("./config/db");
const cors = require("cors");
const encuestaRuta = require("./rutas/encuestaRuta");

// Crear servidor
const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos
conectarBD();

// Permitir todas las solicitudes CORS desde cualquier origen
app.use(
  cors({
    origin: "*", // Permite todas las solicitudes desde cualquier dominio
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Corrección aquí

// Llamar a las APIs
app.use("/api/encuesta", encuestaRuta);

// Definir ruta inicial
app.get("/", (req, res) => {
  res.send("Servidor activo");
});

// Definir puerto de escucha
app.listen(port, () => {
  console.log(`Servidor ejecutando en el puerto ${port}`);
});
