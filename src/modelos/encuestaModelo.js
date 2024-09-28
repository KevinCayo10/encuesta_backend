const mongoose = require("mongoose");

const encuestaSchema = mongoose.Schema({
  edad: {
    type: Number,
    required: false,
  },
  frecuenciaCompra: {
    type: String,
    required: false,
  },
  tiempoCompra: {
    type: String,
    required: false,
  },
  caracteristicas: {
    type: [String],
    required: false,
  },
  disponibilidad: {
    type: String,
    default: Date.now,
  },
  visualizar: {
    type: String,
    default: false,
  },
  categoria: {
    type: [String],
    required: false,
  },
  subcategoriaElectrodomesticos: {
    type: [String],
    required: false,
  },
  marcaElectrodomesticos: {
    type: [String],
    required: false,
  },
  subcategoriaEntretenimiento: {
    type: [String],
    required: false,
  },
  marcaEntretenimiento: {
    type: [String],
    required: false,
  },
  subcategoriaAccesorios: {
    type: [String],
    required: false,
  },
  marcaAccesorios: {
    type: [String],
    required: false,
  },
  marcaMoviles: {
    type: [String],
    required: false,
  },
  marcasComputadoras: {
    type: [String],
    required: false,
  },
  camparar: {
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
    default: Date.now,
  },
});

module.exports = mongoose.model("encuesta", encuestaSchema);
