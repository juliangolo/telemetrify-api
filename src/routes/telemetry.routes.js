// src/routes/telemetry.routes.js
const express = require('express');
const router = express.Router(); // Tema 6: Enrutador modular
const telemetryController = require('../controllers/telemetry.controller');

// Creo una ruta Get '/' utilizando este 'router'.
router.get('/', telemetryController.getMetrics);

// Paso como función manejadora 'telemetryController.getMetrics'


module.exports = router; // Tema 3: Exportación CommonJS
