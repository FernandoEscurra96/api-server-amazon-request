const express = require('express');
const app = express();
const PORT = 3000;
const productos = require('./productos.json'); // Importa JSON directamente



// Endpoint GET /productos
app.get('/productos', (req, res) => {
    // Convertimos el string a objeto JSON
    //const productos = JSON.parse(productos);
    res.json(productos);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Server corriendo en http://localhost:${PORT}`);
});
