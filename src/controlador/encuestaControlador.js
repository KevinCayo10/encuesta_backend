const Encuesta = require("../modelos/encuestaModelo");

exports.registrar = async (req, res) => {
  try {
    let encuesta;
    console.log("BODY : ", req.body);
    encuesta = Encuesta(req.body);
    await encuesta.save();
    res.json({ mensaje: "Encuesta registrada correctamente" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error");
  }
};
