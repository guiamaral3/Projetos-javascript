const express = require("express");
const app = express();
const port = 3000;
// ler o body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requisicoes

// Criar titular
app.post("/users/titular", (req, res) => {
  const nome = req.body.nome;
  const dtNascimento = req.body.dtNascimento;
  const sexo = req.body.sexo;
  const telefone = req.body.telefone;
  const email = req.body.email;

  // Resposta esta fixa por enquanto
  res.send({
    message: "Pessoa incluida!",
    proposta: "0000010",
    nome: nome,
    dtNascimento: dtNascimento,
    sexo: sexo,
    telefone: telefone,
    email: email,
  });
});

// Buscar dados da proposta
app.get("/propostas/:proposta", (req, res) => {
  const proposta = req.params.proposta;
  res.send({ mensagem: `Buscando os dados da proposta: ${proposta}...` });
});

// Verificar se o servico esta ok
app.get("/", (req, res) => {
  res.send({ mensagem: "O serviço está funcionando!" });
});

// Mensagem exibida quando o servidor estiver online
app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});

/* Exemplo de JSON para enviar no POST
{
    "nome": "Guilherme",
    "dtNascimento": "14/02/1997",
    "sexo": "M",
    "telefone": "11998313951",
    "email": "guilherme_amaral3@outlook.com"
}
*/
