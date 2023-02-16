/*
 Closures - Contexto léxico de uma função
    obs: existe uma linguagem de programação chamada clojure
*/

// let xuxa = 'global'; // pode ser acessada globalmente

// function imprimir() {
//     console.log(xuxa);
// }

// function outra() {
//     let xuxa = 'local'; // pode ser acessada localmente no bloco/contexto
//     imprimir();
//     console.log(xuxa); // local 
// }

// outra();



// Novo exemplo
let variavel = 'global';

function externa() {
    let variavel = 'local';

    function interna() {
        return variavel;
    }
    return interna;
}

let executa = externa();

console.log(executa())
