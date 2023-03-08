const express = require("express"); // Importando o express

const app = express(); // Instanciando o express

app.get("/home", (req, res) => {
  // Criando get
  res.contentType("application/html"); // Setando content type como html
  res.status(200).send("<h1>Hello World com express</h1>"); // Setando status 200 e a resposta
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      email: "john@doe.com",
    },
    {
      name: "Jane Doe",
      email: "Jane@doe.com",
    },
  ];
  res.contentType("application/json");
  res.status(200).send(JSON.stringify(users));
});

const port = 3000; // Definindo porta

app.listen(port, () => console.log(`Rodando com Express na porta ${port}`)); // Msg para ver se o servidor esta rodando
