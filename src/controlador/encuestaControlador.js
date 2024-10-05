const Encuesta = require("../modelos/encuestaModelo");
const moment = require("moment-timezone");
exports.registrar = async (req, res) => {
  try {
    const { subcategoria, ...restoDatos } = req.body;

    // Limpiar la subcategoria
    const cleanedSubcategoria = Object.keys(subcategoria).reduce((acc, key) => {
      const value = subcategoria[key];

      // Si el valor es un array vacío, puedes asignar un string vacío o algún valor por defecto
      acc[key] = Array.isArray(value) && value.length === 0 ? "" : value;
      return acc;
    }, {});

    // Crear el objeto de encuesta
    const encuestaData = {
      ...restoDatos,
      subcategoria: cleanedSubcategoria,
      fecha_registro: moment()
        .tz("America/Guayaquil")
        .format("YYYY-MM-DD HH:mm:ss"), // Formatea la fecha como string
    };

    // Crear y guardar el documento en la base de datos
    const encuesta = new Encuesta(encuestaData);
    await encuesta.save();
    res.status(201).json(encuesta);
  } catch (error) {
    console.error("Error al registrar la encuesta:", error.message);
    res.status(400).json({ error: error.message });
  }
};
