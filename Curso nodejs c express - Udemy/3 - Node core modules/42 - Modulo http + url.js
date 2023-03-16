// API com node puro
const http = require("http"); // Importa o core module http
const url = require("url"); // Importa o core module http'

const port = 3000; // Define a porta

// Criando servidor e colocando requisicao
const server = http.createServer((req, res) => {
  const urlInfo = url.parse(req.url, true); // Pegar URl da requisicao
  const name = urlInfo.query.name; // Pega o valor do parametro name

  res.statusCode = 200;
  res.setHeader("Contenty-type", "text/html");
  if (!name) {
    res.end(
      '<h1>Preencha o seu nome:</h1><form method="GET"><input type="text" name="name"/><input type="submit" value="Enviar"/></form>'
    );
  } else {
    res.end(`<h1>Seja bem vindo ${name}!</h1>`);
  }
});

server.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});
