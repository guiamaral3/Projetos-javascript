// Ajax (XMLHttpsRequest) - Asyncronous JavaScript and XML

let btn = document.querySelector('#btn')
let input = document.querySelector('input[name = github_user]')
let div = document.querySelector('#app')

btn.onclick = function () {
    // Limpar o conteudo da div
    div.innerHTML = '';

    // Instanciando objeto ajax
    let ajax = new XMLHttpRequest();

    // Abrir uma conexao (GET, POST, PUT, DELETE... )
    ajax.open('GET', `https://api.github.com/users/${input.value}`);

    // Enviar a requisicao
    ajax.send(null)

    ajax.onreadystatechange = function () {
        // Criar elemento span
        let spanNome = document.createElement('span');

        // Criar a variavel nome
        let txtNome = '';

        /*
            ajax.readyState -> 0 => Antes da conexao ser aberta
            ajax.readyState -> 1 => Apos abrir a conexao
            ajax.readyState -> 2 => Headers (cabecalhos) foram recebidos
            ajax.readyState -> 3 => Carregando o corpo da requisicao (conteudo/dados)
            ajax.readyState -> 4 => O conteudo (dados) esta pronto para uso
        */

        if (ajax.readyState === 4) {
            if (ajax.status === 200) {
                // Transformar os dados JSON para array
                usuario = JSON.parse(ajax.responseText);

                // Se o usuario possui nome
                if (usuario['name'] !== null) {
                    txtNome = document.createTextNode(usuario['name']);

                    let img = document.createElement('img');
                    img.setAttribute('src', usuario['avatar_url'])
                    img.setAttribute('alt', usuario['name'])
                    img.setAttribute('width', '45px')
                    img.setAttribute('height', '45px')

                    div.appendChild(img)
                } else {
                    txtNome = document.createTextNode(`O usuario ${input.value} nao tem nome`)
                }
                // Adiciona o texto ao span e o span a div
                spanNome.appendChild(txtNome)
                div.appendChild(spanNome)

                // Limpar o input
                input.value = '';
            } else {
                txtNome = document.createTextNode(`Nao encontrei o usuario ${input.value}`)

                // Adiciona o texto ao span e o span a div
                spanNome.appendChild(txtNome)
                div.appendChild(spanNome)
            }
        }
    }
}