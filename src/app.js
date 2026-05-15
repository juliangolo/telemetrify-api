// src/app.js

const express = require('express');
const morgan = require('morgan');
const telemetryRoutes = require('./routes/telemetry.routes');
const eventBus = require('./utils/eventBus');

// Inicializo la aplicación Express
const app = express();

// Defino el puerto (usare el 3000 por defecto en local)
const PORT = process.env.PORT || 3000;

// --- MIDDLEWARES (Tema 6) ---
// Registro las peticiones HTTP en consola para depuración
app.use(morgan('dev'));
// Parseo el body de las peticiones que vengan en formato JSON
app.use(express.json());

// --- RUTAS BASE (Tema 6) ---
app.get('/api/ping', (req, res) => {
    res.status(200).json({ message: 'Telemetrify API rockeando al 100%'});
});

app.use('/api/telemetry', telemetryRoutes);

// --- MANEJO DE RUTAS INEXISTENTES (404) (Tema 6)
app.use((req, res, next) => {
    res.status(404).json({ error: 'Ruta no encontrada' });
});

eventBus.on('telemetry_error', (error) => {
    console.log('🚨 [EVENT BUS] Fallo crítico en telemetría:', error.message);
});

// --- INICIO DEL SERVIDOR (Tema 5 y 6)
app.listen(PORT, ()=> {
    console.log(`🚀 Servidor corriendo y esperando en el PUERTO: ${PORT}`);
});