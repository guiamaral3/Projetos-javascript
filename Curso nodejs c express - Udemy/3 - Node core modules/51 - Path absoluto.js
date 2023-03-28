const path = require("path");

// path absoluto
console.log(path.resolve("NovoArquivo.txt"));

// formar path
const midFolder = "relatorios";
const filename = "Guilherme.txt";

const finalPath = path.join("/", "arquivos", midFolder, filename);

console.log("\n", finalPath);
