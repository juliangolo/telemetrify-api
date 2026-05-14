// src/utils/logGenerator.js
const fs = require('node:fs');  // Tema 4: Sistema de archivos nativo
const path = require('node:path');

// Creo una ruta absoluta que apunta a un archivo que le llamo 'telemetry.log' dentro de la carpeta raíz 
const logPath = path.join(__dirname, '../../', 'telemetry.log');
const writableStream = fs.createWriteStream(logPath, 'utf-8');

function generateMassiveLog() {
    let i = 0;
    const maxLines = 1e6; // 1 millón de registros de telemetría 

    function write() {
        let ok = true;
        do {
            i++;
            const data = `[${new Date().toISOString()}] METRIC ID: ${i} | VALUE: ${Math.random()}\n`;
            ok = writableStream.write(data);
        } while (i < maxLines && ok);

        if (i === maxLines) {
            writableStream.end();
            console.log('✅ Log masivo generado'); 
        } else { 
            writableStream.once('drain', write); 
        }
    }    
    write();
}
 
module.exports = { generateMassiveLog }; // Tema 3: Exportación CommonJS



