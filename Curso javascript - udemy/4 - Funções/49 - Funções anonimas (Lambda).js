let numeros = [1, 2, 3, 4, 5, 6]

const dobrar = (valor) => {
    return valor * 2
}

let res1 = numeros.map(dobrar)

console.log(res1)



// Funções anonimas não tem nome - Lambdas (funções lambdas)
let res2 = numeros.map(function (valor) {
    return valor * 2
})

console.log(res2)



function somar(n1, n2) {
    return n1 + n2
}
const mostrar = function (n1, n2, calculo = somar) {
    console.log(calculo(n1, n2))
}

mostrar(2, 4) // 6
mostrar(6, 9, somar) // 15
// Exemplo de function lambda
mostrar(3, 6, function (n1, n2) {
    return n1 + n2
}) // 9
// Exemplo de arrow function lambda
mostrar(4, 8, (n1, n2) => n1 + n2) // 12