var teste = [1,2,3,4,5,6]

// inserir e remover
teste.push(7)
teste.pop()
console.log(teste)

// Usando foreach
teste.forEach(function(numero){
    console.log(`${numero}`)
})

// Usando map
dobro = teste.map(function (numero){
    return numero * 2
})
console.log(dobro)

// Usando filter
filtrado = teste.filter(function (numero){
    return numero > 4
})
console.log(filtrado)