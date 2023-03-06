// Rest/spread (Juntar/Espalhar) -> ...

function total (...precos){
    let total = 0;
    precos.forEach(p => total += p);
    return total
}
// Os parametros da funcao ficam variaveis, e pode ser informado quantos valores desejar
console.log(total(23.44,22,3.45,5.67).toFixed(2))

console.log(total(10,20))




// Exemplo 2 - Pode somar o array
let frutas1 = ['Manga','Uva','Melancia']
let frutas2 = ['Abacate','Morango','Jaca']

let compras = [...frutas1,...frutas2]

console.log(compras)



// Exemplo 3 - Pode adicionar um item ao array
let alunos = ['Paula','Felipe','Fernanda']

let novo = 'Joana'

let todos = [...alunos, novo]
console.log(todos)