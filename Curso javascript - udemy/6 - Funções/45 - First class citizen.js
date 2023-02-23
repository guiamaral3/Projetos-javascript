// Exemplo de function
function somar(num1, num2) {
    return num1 + num2
}

console.log(somar(1, 2))



// Pode colocar a funcao dentro da uma variável
const executar = somar;

console.log(executar(5, 6))



// Passando funcao como parametro
function fazAlgo(n1, n2, funcao) {
    return funcao(n1, n2)
}

console.log(fazAlgo(2, 3, somar))



// Funcao que retorna funcao
function outra(x) {
    return x
}
const ret = outra(somar)
console.log(ret(4,2))



// Executando funcao
function mensagem(){
    console.log('Evolua seu lado geek')
}

mensagem()