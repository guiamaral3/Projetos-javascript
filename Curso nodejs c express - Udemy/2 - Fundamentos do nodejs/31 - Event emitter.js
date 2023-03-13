const EventEmitter = require("events"); // Importando modulo interno
const eventEmitter = new EventEmitter(); // Instanciando objeto

// Criando evento, colocando nome e o que deve acontecer
eventEmitter.on("start", () => {
  console.log("Durante");
});

console.log("Antes");

eventEmitter.emit("start");

console.log("Depois");
