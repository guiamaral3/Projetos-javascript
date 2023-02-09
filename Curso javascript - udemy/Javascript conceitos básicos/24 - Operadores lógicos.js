//Operadores Lógicos
var curso = 'JavaScript';
var legal = false;

// AND (e = ambas expressões devem ser verdadeiras)
console.log('iniciando &&')
if (curso === 'JavaScript' && legal === true) {
    console.log('O curso de JavaScript é legal!');
} else {
    console.log('O curso não é de JavaScript ou não é legal.');
}

// OR (ou = pelo menos uma expressão deve ser verdadeira)
console.log('\niniciando ||')
if (curso === 'JavaScript' || legal === true) {
    console.log('O curso de JavaScript é legal.');
} else {
    console.log('O curso não é de JavaScript ou não é legal.');
}

// NOT (quando queremos fazer uma negação ou verificar se algo não é como esperado)
console.log('\niniciando !=')
if (curso != 'JavaScript') {
    console.log('O curso não é JavaScript');
} else {
    console.log('O curso é JavaScript');
}