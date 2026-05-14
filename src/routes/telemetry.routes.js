// src/routes/telemetry.routes.js
const express = require('express');
const router = express.Router(); // Tema 6: Enrutador modular

// Creo una ruta Get '/' utilizando este 'router'.
router.get('/', (req, res) => {
    res.status(200).json({ status: 'ok', data: 'Lista de métricas' });
});

module.exports = router; // Tema 3: Exportación CommonJS