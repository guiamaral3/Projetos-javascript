// Modulo fs
const fs = require("fs");

if (!fs.existsSync("./minhapasta")) {
  console.log("Não existe!");
  // Criar pasta
  fs.mkdirSync("minhapasta");
}

if (fs.existsSync("./minhapasta")) {
  console.log("Existe!");
}
