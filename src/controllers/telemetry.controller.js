// src/controllers/telemetry.controller.js
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');
const eventBus = require('../utils/eventBus');

const getMetrics = async (req, res, next) => {
    try {
        //Defino 'logPath apuntando a '../../telemetry.log' uso path.join y __dirname
        const logPath = path.join(__dirname, '../../', 'telemetry.log');
        // Creo un Readable Stream y uso fs.createReadStream() pasándole 'logPath' y la codificación 'utf-8'.
        // y lo asigno a la contante 'readStream'
        const readStream = fs.createReadStream(logPath, 'utf-8');
        readStream.on('error', (error) => {
            eventBus.emit('telemetry_error', (error));
            next(error);
        });

        const gzipStream = zlib.createGzip();
        res.status(200);
        res.set('Content-Encoding', 'gzip');
        
        readStream.pipe(gzipStream).pipe(res);

        } catch (error) {
            eventBus.emit('telemetry_error', error);
            next(error);
        }
    };

module.exports = { getMetrics }; // Tema 3: Exportación CommonJS©