
// Verifica se é maior de idade
var idade = 13;
if (idade >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

// Verifica qual faixa etária
if (idade <= 14) {
    console.log("Criança");
} else if (idade > 14 && idade < 18) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}

// Verifica se valor é igual
if (1 == "1") {
    console.log('Sim, 1 == "1"');
} else {
    console.log("Não");
}

// Verifica se valor E TIPO é igual
var valor = 42;
var valors = "42";
if (valor === valors) {
    console.log('Sim, valor === valors');
} else {
    console.log("Não");
}

// Exempo de switch case
var sexo = 'k';
switch (sexo) {
    case 'm':
        console.log("Masculino");
        break;
    case 'f':
        console.log('Feminino');
        break;
    default:
        console.log('Desconhecido');
        break;
}

// Verifica e retorna boleano
var a = 1
if (a == 2) {
    resposta = true;
} else {
    resposta = false;
}
console.log(resposta);