// src/utils/eventBus.js
const EventEmitter = require('node:events');

class SystemBus extends EventEmitter {

}

const eventBus = new SystemBus();

// Exporto 'EventBus' usando CommonJS
module.exports = eventBus; // Tema 3: Exportación CommonJS