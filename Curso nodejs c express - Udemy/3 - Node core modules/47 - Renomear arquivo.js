const fs = require("fs");

// Renomear arquivo
fs.rename("arquivo.txt", "NovoArquivo.txt", function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log("Arquivo renomeado!");
});
