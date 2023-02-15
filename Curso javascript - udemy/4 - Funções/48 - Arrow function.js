// Forma 1
function somar1(n1, n2) {
    return n1 + n2
}

// console.log(somar1(4, 6))



// Forma 2
let somar2 = function (n1, n2) {
    return n1 + n2
}

// console.log(somar2(4, 6))



// Froma 3
let somar3 = somar1;

// console.log(somar3(4, 6))



// Arrow function
let somar4 = (n1, n2) => {
    return n1 + n2
}

// console.log(somar4(4, 6))



/*
Atenção

Caso a sua função tenha apenas um parametro de entrada e executa 
apenas uma linha, voce pode simplificar ainda mais usando arrow function
*/

let dobrar = valor => valor * 2;

// console.log(dobrar(10))



// Arrow function sem parametro
const msg = () => console.log("Evolua seu lado Geek")

msg();