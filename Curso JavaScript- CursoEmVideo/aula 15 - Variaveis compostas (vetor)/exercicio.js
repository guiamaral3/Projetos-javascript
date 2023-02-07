// Criar vetor e mostrar na tela
let num = [5, 6, 2, 4, 3]
console.log(`${num}`)

// Adicionar valor manual na ultima posição do vetor e mostrar na tela
num[5] = 1
console.log(`${num}`)

// Adicionar valor automático na ultima posição do vetor e mostrar na tela
num.push(7)
console.log(`${num}`)

// Colocar vetor em ordem crescente e mostrar na tela
num.sort()
console.log(`${num}`)

// ver tamanho do vetor
console.log(`O vetor tem ${num.length} caracteres.`)

// Mostrar todos itens do vetor em um laço de repetição
for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

// Mostrar todos itens do vetor com for each
for (let pos in num) {
    console.log(num[pos])
}

// Buscar valores dentro do vetor
console.log(num.indexOf(1))