// Metodo usando evento inline, orecusaria coloca o onclick em cada botao do html
// function removerBotao(btn){
//     // Recuperar o elemento div
//     let divElement = document.querySelector('#app');

//     // Remove o filho selecionado da div
//     divElement.removeChild(btn)

//     // Fazendo o mesmo processo sem usar variavel
//     // document.querySelector('#app').removeChild(btn)
// }



// Forma usando evento no script
let btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        document.querySelector('#app').removeChild(this)
    }
}