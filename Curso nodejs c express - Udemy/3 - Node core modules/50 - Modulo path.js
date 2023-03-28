const path = require("path"); // Importa o core module path

const customPath = "/relatorios/mateus/relatorio1.pdf"; // Define um caminho em uma variavel

console.log(path.dirname(customPath)); // Diretorio em que está o arquivo
console.log(path.basename(customPath)); // Nome do arquivo
console.log(path.extname(customPath)); // Extensão do arquivo
