// Operadores aritméticos
/*
+ adição
- subtração
* multiplicação
/ divisão

//Operadores aritméticos abreviados
+=
-=
*=
/=
*/

// Dividir por 0 da infinity
console.log(7 / 0); //Infinity

// Dividir string funciona
console.log("42" / 2);

// NaN (Not a Number)
console.log("Geek" * 3); 

// 0.79999999999999999
console.log(0.1 + 0.7); 

// Converter em string
var num = 42;
console.log(num.toString() + " " +typeof(num));

// Fixar casas decimais
console.log(13.343455544.toFixed(2));

// Mostrar phi
console.log(Math.PI);

// Elevar ao quadrado
console.log(Math.pow(3, 2));

// Mostrar a raiz quadrada
console.log(Math.sqrt(81));

// Verifica se é inteiro
console.log(Number.isInteger(45));
console.log(Number.isInteger("University"));

// Conversão binária
var valor = 10;
console.log(valor.toString(2));