//const { Person } = require("./person"); // Instancia o modulo person
//require("./modules/path"); // Executa o modulo path
//require("./modules/fs(criar e editar arquivos)"); // Executa o modulo fs
//require("./modules/http(API com node puro)"); // Executa o modulo http
//require("./modules/express"); // Executa o modulo express
const dotenv = require("dotenv"); // Instancia o modulo dotenv
const connectToDatabase = require("./src/database/connect"); // Instancia o modulo connect
dotenv.config();

connectToDatabase();

// const guilherme = new Person("Guilherme"); // Instancia um objeto do tipo person
// console.log(guilherme.falarNome()); // Executa uma funcao do objeto person
