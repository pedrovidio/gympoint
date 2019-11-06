// app.js
const express = require('express');

const server = express();
// routes.js
server.get('/teste', (req, res) => {
  const id = req.params.id;
  
  return res.json({ message: `Buscando o usuário ${id}`});
})

// server.js
server.listen(3000);