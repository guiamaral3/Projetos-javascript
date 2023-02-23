const data = new Date()

function calcularIdade(ano_nascimento, nome) {
    const idade = data.getFullYear() - ano_nascimento
    return `${nome} tem ${idade} anos.`
}

console.log(calcularIdade(1997, 'Guilherme'))

console.log('Data:' + data)
console.log(data.getFullYear())
console.log(data.getMonth())



// Passando paramentros incorretos
function somar (n1,n2){
    return n1+n2
}

console.log(somar(2,3)) // retorna 5
console.log(somar(2)) // retorna NaN
console.log(somar(2,3,4,5,6,7)) // retorna a soma do 2 primeiros