// Callback - chamar de volta

const cursos = [
    'Programação para Leigos',
    'Algoritmos e Lógica de Programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript',
]

// function apresentar(curso, indice) {
//     console.log(`${indice + 1} - ${curso}`)
// }

// cursos.forEach(apresentar)



// console.log('\n')
// // Usando lambda
// cursos.forEach(function (curso, indice) {
//     console.log(`${indice + 1} - ${curso}`)
// })



// console.log('\n')
// // Usando arrow
// cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`
// ))


// Outros exemplos de callbacks
const precos = [
    23.55,
    78.23,
    899.43,
    12.89,
    5.23,
    67.45
]

// For in
let menores = []

for (let p in precos) {
    if (precos[p] < 50) {
        menores.push(precos[p])
    }
}
console.log(menores)



// For tradicional
for (let i = 0; i < precos.length; i++) {
    if (precos[i] < 50) {
        menores.push(precos[i])
    }

}
console.log(menores)



// For each
precos.forEach(function (array) {
    if (array < 50) {
        menores.push(array)
    }
}
)
console.log(menores)



// Filter com function lambda
menores = precos.filter(function (preco) {
    return preco < 50
})
console.log(menores)



// Filter com Arrow function lambda
menores = precos.filter(preco => preco < 50)
console.log(menores)