const fs = require("fs");

fs.stat("NovoArquivo.txt", (err, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(stats.isFile()); // Verifica se é um arquivo
  console.log(stats.isDirectory()); // Verifica se é um diretório
  console.log(stats.isSymbolicLink()); // Verificar se é um link simbólico
  console.log(stats.ctime); // Data e hora de criação com +3 horas
  console.log(stats.size); // Tamanho - Quantidade de bytes
});
