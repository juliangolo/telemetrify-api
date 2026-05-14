// src/controllers/telemetry.controller.js
const fs = require('node:fs/promises');

const getMetrics = async (req, res, next) => {
    try {
        res.status(200).json({ status: 'ok', data: 'Lista de métricas' });
    } catch (error) {
        next(error);
    }
};

module.exports = { getMetrics }; // Tema 3: Exportación CommonJS}