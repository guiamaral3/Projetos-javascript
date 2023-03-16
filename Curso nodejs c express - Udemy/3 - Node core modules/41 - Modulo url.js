const url = require("url"); // Importa o core module url
const address = "https://www.meusite.com.br/catalog?produtos=cadeira"; // Cria um endereço ficticio
const parsedUrl = new url.URL(address); // Passa o endereço para o metodo URL

console.log(parsedUrl.host); // Url base
console.log(parsedUrl.pathname); // Rota da url
console.log(parsedUrl.search); // Parametros
console.log(parsedUrl.searchParams); // Parametros em objeto
console.log(parsedUrl.searchParams.get("produtos")); // Pegar o valor do parametro produtos
