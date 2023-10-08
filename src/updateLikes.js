const mongoose = require('mongoose');
const { Apartamento } = require('./models/apartamento'); // Importa el modelo de Mongoose

Apartamento.updateMany({}, { $set: { likes: 0 } })
  .then((res) => {
    console.log("Se han actualizado los apartamentos exitosamente.");
    mongoose.connection.close(); // Cierra la conexión después de actualizar los documentos
  })
  .catch((err) => {
    console.log("Error al actualizar los apartamentos:", err);
  });