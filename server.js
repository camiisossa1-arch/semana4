const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hola, servidor funcionando!');
});

app.get('/hola', (req, res) => {
  res.send('Hola desde la ruta /hola');
});

app.get('/usuario', (req, res) => {
  res.json({ nombre: 'Juan', carrera: 'Ingeniería', semana: 4 });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});