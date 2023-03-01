let btn = document.querySelector('button') // Coloca o botao em uma variavel

// Atribui uma funcao quando clicar no botao
btn.onclick = function () {
    let textElement = ''; // Cria variavel com texto vazio
    let inputValue = document.querySelector('input').value; // Cria variavel e adiciona o valor do input
    let pElement = document.createElement('p') // Cria variavel e adiciona um elemento de paragrafo
    pElement.setAttribute('class', 'class-p') // Coloca o atributo de classe para esse elemento novo
    if (inputValue !== '') {    // Se o valor for diferente de vazio
        textElement = document.createTextNode(inputValue) // Adiciona o valor do imput na variavel textElement
    } else {
        textElement = document.createTextNode('Veio vazio...'); // Adiciona 'veio vazio' na variavel textElement
    }

    pElement.appendChild(textElement) // Seta o textElement como filho do pElement
    let divElement = document.querySelector('#app') // Cria variavel e adiciona a div
    divElement.appendChild(pElement) // Seta o pElement como filho da div
    document.querySelector('input').value = '' // Seta o valor do input para vazio
}