let numeros = [1,2,3,4,5]
// FOR OF serve para pegar apenas valor sem INDICE

// for (const iterator of numeros) {
//     console.log(iterator*2)
// }


// FOR IN serve para pegar indices e seu valores
// for (const indice in numeros) {
//     console.log(`Indice: ${indice}, Valor: ${numeros[indice]}`)
// }



// For of com map
let cursos = new Map([
    [1, 'Programação para leigos'],
    [2, 'Algoritmos e logica de programação'],
    [3, 'Programação em C'],
    [4, 'Programação em Java'],
    [5, 'Programação em Python'],
    [6, 'Banco de Dados'],
    [7, 'Programação Web com Djando Framework'],
])

// for (let curso of cursos) {
//     console.log(`${curso[0]} - ${curso[1]}`)
// }



// chave/valor
// for (const curso of cursos) {
//     console.log(curso)
// }



// Somente a chave
for (const chave of cursos.keys()) {
    console.log(chave)
}

// Somente o valor
for (const valor of cursos.values()) {
    console.log(valor)
}

// Chave e valor
for (const [chave, valor] of cursos.entries()) {
    console.log(`${chave} - ${valor}`)
}