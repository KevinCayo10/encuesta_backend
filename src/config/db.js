const mongoose = require("mongoose");
require("dotenv").config({ path: ".env" });

const conectarBD = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Tiempo de espera para la selección del servidor
    });
    console.log("Base de datos conectada con éxito");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error.message);
    // Manejo alternativo en lugar de detener el proceso
    // Podrías lanzar un error o establecer un estado en tu aplicación
    // throw new Error("No se pudo conectar a la base de datos");
  }
};

module.exports = conectarBD;
