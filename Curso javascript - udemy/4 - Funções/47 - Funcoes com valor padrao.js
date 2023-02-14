/*function somar() {
    let soma = 0;
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }
    return soma;
}

console.log(somar());

console.log(somar(9, 6));
*/


function imprime(n1, n2) {
    for (let i in arguments) {
        console.log(arguments[i])
    }
}

// imprime(1, 2, 3, 4, 5, 6)


// Usando valores padrão
function somar(n1 = 1, n2 = 5) { 
    return n1 + n2
}

console.log(somar(undefined,6))