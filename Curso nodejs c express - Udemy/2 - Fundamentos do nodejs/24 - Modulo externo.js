// Precisa iniciar o npm no projeto com $npm init
// Para instalar use o comando $npm install <nome>

// minimist serve para usar os argumentos da linha de comando
const minimist = require("minimist");

const args = minimist(process.argv.slice(2));

console.log(args);

const nome = args["nome"];
const profissao = args["profissao"];

console.log(nome, profissao);
