// Aula 20 - Importando modulo interno
// require("./20 - Criando modulo interno");

// Aula 21 - Import e export
// import soma from "./21 - Import e Export.mjs";

// Aula 24
// require("./24 - Modulo externo");

// Aula 25
// // externo
// import minimist from "minimist"; // Importa o modulo externo minimist
// const args = minimist(process.argv.slice(2));

// const a = parseInt(args["a"]); // Pega o valor do argumento a
// const b = parseInt(args["b"]); // Pega o valor do argumento b

// // interno
// import soma from "./21 - Import e Export.js"; // Importa o modulo interno soma

// soma(2, 2); // Soma 2+2 e mostra no console
// soma(a, b); // Soma os argumentos a+b e mostra no console

// Aula 27
// import chalk from "chalk"; // Importa o modulo externo chalk (usado para estilizar o console.log)

// const nota = 7;

// nota >= 7
//   ? console.log(chalk.green.bold("Aprovado!"))
//   : console.log(chalk.bgRed("Reprovado!"));

// Aula 28
// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("Qual a sua linguagem preferida? \n", (language) => {
//   console.clear();
//   console.log(`A minha linguagem preferida é ${language}`);
//   readline.close();
// });

// Aula 29
// import inquirer from "inquirer";

// inquirer
//   .prompt([
//     {
//       name: "p1",
//       message: "Qual a primeira nota? ",
//     },
//     {
//       name: "p2",
//       message: "Qual a segunda nota? ",
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);
//     const media =
//       (parseInt(answers.p1) + parseInt(answers.p2)) /
//       Object.keys(answers).length;
//     console.log(`A média é: ${media}`);
//   })
//   .catch((err) => console.log(err));

// Aula 30
// require("./30 - Event loop");
