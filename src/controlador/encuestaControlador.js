const Encuesta = require("../modelos/encuestaModelo");

exports.registrar = async (req, res) => {
  try {
    let encuesta;
    encuesta = Encuesta(req.body);
    console.log("LOCALHOST");
    await encuesta.save();
    res.json({ mensaje: "Encuesta registrada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
