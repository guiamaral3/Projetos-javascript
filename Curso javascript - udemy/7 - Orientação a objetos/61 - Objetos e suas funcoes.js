const curso = {
    nome: "Programacao em javascript",
    horas: 25,
    preco: 27.85
}

// // Mostrar todo objeto
// console.log(curso);

// // Mostrar o tipo do objeto
// console.log(typeof (curso))

// // Mostrar apenas as chaves do objeto
// console.log(Object.keys(curso));

// // Mostrar apenas os valores do objeto
// console.log(Object.values(curso))

// // Mostrar objeto como array
// console.log(Object.entries(curso))

// Object.entries(curso).forEach(par => {
//     console.log(`${par[0]}: ${par[1]}`)
// })

// Desconstruir objeto com destructuring
// Object.entries(curso).forEach(([chave, valor]) => {
//     console.log(`${chave}: ${valor}`);
// }
// )

// // Adicionar chave que não pode ser editada
// Object.defineProperty(curso, 'publicacao',{
//     enumerable: false, // true - fica visivel // false - nào fica visivel
//     writable: false, // true - fica editavel // false - nào fica editavel
//     value: '27/02/1997'
// })
// curso.publicacao = '01/01/1900' // Alteracao nào tem efeito pois item não está editavel
// console.log(curso)
// console.log(curso.publicacao)



// // Bloquear edicao do objeto
// Object.freeze(curso)

// curso.nome = 'teste'

// curso.horas = 1

// console.log(curso)



const usuarios = [
    { nome: 'Samuel', empresa: 'Riot gomes' },
    { nome: 'Douglas', empresa: 'Universal' },
    { nome: 'Michael', empresa: 'Totvs' }
]

console.log(usuarios)
console.table(usuarios)
console.table(curso)
console.log(usuarios[0])