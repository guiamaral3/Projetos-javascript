let a = document.querySelector('.link');

console.log(a) // Mostra o elemento que foi incluido na variavel

console.log(a.innerHTML) // Mostra o texto dentro do elemento

console.log(a.parentNode) // Mostra o pai do elemento

console.log(a.parentNode.parentNode) // Mostra o pai do pai do elemento

console.log(a.parentNode.parentNode.parentNode) // Mostra o pai do pai do pai do elemento

console.log(a.parentNode.parentNode.childNodes) // Mostra os filhos do html

console.log(a.parentNode.parentNode.firstChild) // Mostra o primeiro filho do html

console.log(a.parentNode.parentNode.lastChild) // Mostra o ultimo filho do html

console.log(a.parentNode.parentNode.firstChild.nextSibling) // Mostra o proximo irmão

console.log(a.parentNode.parentNode.firstChild.nextSibling.previousSibling) // Mostra o irmão anterior