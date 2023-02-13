// Escopo de variáveis
var teste = 42; //variável global
let exemplo = 20; //variável local

//variável (só é reconhecida dentro do bloco da função)
function somar(num1, num2) {
    var valor = 5; //variável local
    return valor + num1 + num2;
}
console.log(somar(4, 6));

//Temos acesso a variável, pois foi declarada em um bloco for
for (var i = 0; i < 5; i++) {
    var outra = 5; //variável global
    console.log(i * outra);
}
console.log(outra); 