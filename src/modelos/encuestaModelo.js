const mongoose = require("mongoose");
const moment = require("moment-timezone");
const encuestaSchema = mongoose.Schema({
  edad: {
    type: Number,
    required: false,
  },
  estrato: {
    type: String,
    required: false,
  },
  frecuenciaCompra: {
    type: String,
    required: false,
  },
  tiempoBusqueda: {
    // Cambiado de tiempoCompra a tiempoBusqueda
    type: String,
    required: false,
  },
  factoresImportantes: {
    // Cambiado de caracteristicas a factoresImportantes
    type: [String],
    required: false,
  },
  disponibilidad: {
    type: String,
    required: false, // Cambiado de default a required
  },
  visualizar: {
    type: String,
    required: false,
  },
  categoriasProductos: {
    // Cambiado de categoria a categoriasProductos
    type: [String],
    required: false,
  },
  subcategoria: {
    // Cambiado de subcategoriaElectrodomesticos y otros a subcategoria
    type: Map,
    of: String, // Usamos Map para permitir múltiples subcategorías por categoría
    required: false,
  },
  marca: {
    // Cambiado de marcaElectrodomesticos y otros a marca
    type: Map,
    of: String, // Usamos Map para permitir múltiples marcas por categoría
    required: false,
  },
  otrasSubcategorias: {
    // Cambiado de subcategoriaEntretenimiento y otros a otrasSubcategorias
    type: Map,
    of: String, // Permitir múltiples otras subcategorías
    required: false,
  },
  comparar: {
    type: String,
    required: false,
  },
  filtrar: {
    type: String,
    required: false,
  },
  probable: {
    type: String,
    required: false,
  },
  util: {
    type: String,
    required: false,
  },
  recomendacion: {
    type: String,
    required: false,
  },
  fecha: {
    type: Date,
    default: () => moment().tz("America/Guayaquil").toDate(), // Aplica la zona horaria correctamente
  },
});

module.exports = mongoose.model("encuesta", encuestaSchema);
