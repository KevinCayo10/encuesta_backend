const Encuesta = require("../modelos/encuestaModelo");
const moment = require("moment-timezone");
exports.registrar = async (req, res) => {
  try {
    const encuesta = new Encuesta({
      ...req.body, // Copia el resto de los campos enviados en la solicitud
      fecha_registro: moment()
        .tz("America/Guayaquil")
        .format("YYYY-MM-DD HH:mm:ss"), // Formatea la fecha como string
    });
    await encuesta.save();
    res.json({ mensaje: "Encuesta registrada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
