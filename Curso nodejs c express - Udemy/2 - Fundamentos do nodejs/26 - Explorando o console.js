// Mais de um valor
const x = 10;
const y = "Guilherme";
const z = [1, 2];

console.log(x, y, z);

// contagem de impressōes
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);
console.count(`O valor de x é: ${x}, contagem`);

// Variavel entre string
console.log("O nome é %s", y);

// Limpar o console
setTimeout(() => {
  console.clear();
}, 2000);
