/*
    Conjuntos não aceita repetição de valores
    Conjuntos nao sao indexados
*/

// Declarando um conjunto
let cursos = new Set();

// Adicionando valores
cursos.add('Programação para leigos')
cursos.add('Algoritmos e Lógica de Programação')

// Adicionar valores concatenados
cursos.add('Programação em C').add('Programação em Java').add('Programação em Python')

cursos.add('Banco de dados')
cursos.add('Programação web com Django Framework')

// Ao adicionar um item ja existente nada acontece pois nao é possivel duplicar
cursos.add('Banco de dados')

// console.log(cursos)
// console.log(cursos.size)

// Verificar se possui o valor
console.log(cursos.has('Banco de dados'))

// Deletar elementos do conjunto
let ret = cursos.delete('Programação para leigos')
console.log(ret) // Salvar o retorno true/false do delete
console.log(cursos)



// Criar um conjunto a partir do array
let frutas = ['Manga', 'Uva', 'Jaca', 'Uva']
let frutas_unicas = new Set(frutas)
console.log(frutas_unicas)



// Iterar sobre o conjunto
for (const fruta of frutas_unicas) {
    console.log(fruta)
}