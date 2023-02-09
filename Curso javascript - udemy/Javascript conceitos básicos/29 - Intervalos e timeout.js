// Null (nulo) e Undefined (indefinido)

//valor por referência
var aluno = {
    nome: "Angelina",
    nota: 23.5
};

console.log(aluno);

/*
Quando realizamos uma atribuição por referência
estamos falando que ambas variáveis apontam para
o mesmo endereço de memória.

Isso ocorre quanto trabalhamos com objetos e funções
*/
var outra = aluno; //(variáveis ligadas pelo endereço de memória)

outra.nome = 'Felicity';

console.log(outra);

console.log(aluno);

//Com valores primitivos ocorre a cópia do dado
var num1 = 34;
var num2 = num1; //ocorre uma cópia do dado (variáveis independentes)

num1++;
console.log(num1);
console.log(num2);

// Undefined
//console.log(qualquer); // is not defined

var novo;
console.log(novo); //undefined

var maisum = null;
console.log(maisum);