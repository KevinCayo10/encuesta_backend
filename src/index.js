const express = require("express");
const conectarBD = require("./config/db");
const cors = require("cors");
const encuestaRuta = require("./rutas/encuestaRuta");

// Crear servidor
const app = express();
const port = process.env.PORT || 3000;

// Conectar a la base de datos y luego iniciar el servidor
const iniciarServidor = async () => {
  try {
    await conectarBD(); // Esperar a que la conexión se establezca
    console.log("Base de datos conectada");

    // Permitir todas las solicitudes CORS desde cualquier origen
    app.use(
      cors({
        origin: "*", // Permite todas las solicitudes desde cualquier dominio
      })
    );

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

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
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
    // Podrías optar por finalizar el proceso o manejarlo de otra manera
    process.exit(1);
  }
};

iniciarServidor(); // Llamar a la función para iniciar el servidor
