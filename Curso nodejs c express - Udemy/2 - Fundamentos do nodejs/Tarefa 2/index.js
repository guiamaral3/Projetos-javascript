import inquirer from "inquirer";
import chalk from "chalk";

inquirer
  .prompt([
    {
      name: "nome",
      message: "Qual é o seu nome?\n",
    },
    {
      name: "idade",
      message: "Qual é a sua idade?\n",
    },
  ])
  .then((answers) => {
    if (!answers.nome || !answers.idade) {
      throw new Error("O nome e a idade são obrigatórios!");
    }
    console.log(
      chalk.bgYellow.black(`${answers.nome} tem ${answers.idade} anos.`)
    );
  })
  .catch((err) => console.log(err));
