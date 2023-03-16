// API com node puro
const http = require("http"); // Importa o core module http
const fs = require("fs"); // Importa o core module fs

const port = 3000; // Define a porta

// Criando servidor e colocando requisicao
const server = http.createServer((req, res) => {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
