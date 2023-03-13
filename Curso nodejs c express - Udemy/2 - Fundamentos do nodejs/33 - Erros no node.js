// throw - Devolve erro e para a execução do programa
const x = "10";

// checar se x é um numero
// if (!Number.isInteger(x)) {
//   throw new Error("O valor de x não é um número inteiro!");
// }

// console.log("Continuando o código...");

// Try catch - Tentar fazer, se não conseguir faz catch
try {
  x = 2;
} catch (error) {
  console.log(`Erro:  ${error}`);
}
