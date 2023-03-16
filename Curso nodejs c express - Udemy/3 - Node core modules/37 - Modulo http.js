// API com node puro
const http = require("http"); // Importa o core module http

const port = 3000; // Define a porta

// Criando servidor e colocando requisicao
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Contenty-type", "text/html");
  res.end(
    "<h1>Olá, este é meu primeiro server com html!</h1><p>Testando parágrafo</p>"
  );
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
