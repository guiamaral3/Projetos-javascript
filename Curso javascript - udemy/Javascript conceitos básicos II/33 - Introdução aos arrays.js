
// Detalhes sobre arrays
// - Possuem tamanho infinito
// - Podemos colocar qualquer tipo de dado

// valores em um array
// var a = [12, 'Geek', true, 1.72]
// console.log(a)

// Forma 1
// var alunos = new Array('Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia');
// Forma 2 [Recomendada]
var alunos = ['Cristina', 'Ricardo', 'Lucas', 'Maria', 'Sofia'];
// console.log(alunos);

// Criando um array vazio
var dados = [];
//console.log(dados);

// Fazendo acesso ao valor de um índice
//console.log(alunos[2]); 

// Atenção ao acessar um valor com um índice que não existe
alunos[9] = 10; // Não existe!
// console.log(alunos);


if (alunos[5] == undefined) {
    alunos[5] = 54;
}

// console.log(alunos); // 54
// console.log(alunos[6]); // undefined
// console.log(alunos[7]); // undefined
// console.log(alunos[8]); // undefined
// console.log(alunos[9]); // 10

// console.log(alunos[5] == undefined); // false






// Inserindo elementos no final do array
var nomes = ['Paula', 'Maria', 'Julia'];
// console.log(nomes);

nomes.push('Vanessa'); // insere o valor no final do array
// console.log(nomes);

var removeFim = nomes.pop(); // Remove elemento da última posição do array
// console.log(nomes + " e o valor removido no fim foi " + removeFim);

nomes.unshift('Leticia'); // insere o valor no inicio do array
// console.log(nomes);

var removeIni = nomes.shift();
// console.log(nomes + " e o valor removido no inicio foi " + removeIni);

var novo = nomes.slice(1) // retorna um novo array a partir do índice informado
// console.log(novo)

var novo2 = nomes.slice(1, 2); //a partir do índice 1, pegue até o índice 2 sem incluí-lo
// console.log(novo2);

// Alaterando o valor a partir do índice
nomes[3] = 12;
// console.log(nomes);

// Deletando dados de um array
delete nomes[3];
// console.log(nomes);

// Tamanho do array
// console.log(nomes.length); // 4

// Ordenar os dados de um array
// console.log(nomes.sort());






// Ordenar float
var precos = [123.55, 42.27, 546.99, 23.12];
// console.log(precos);

precos.sort(function (a, b) { return a - b; });
// console.log(precos);

// Ordenar int
var idades = [5, 1, 8, 12, 44, 78];
// console.log(idades);

idades.sort(function (a, b) { return a - b; });
// console.log(idades);


//idades.splice(3, 2); // A partir do índice 3, delete 2 elemento
// console.log(idades);

// idades.splice(3, 0, 56, 89); // A partir do índice 3, não delete nenhum, mas adicione 56, 89
// console.log(idades);

// idades.splice(3, 1, 23); // A partir do índice 3, deleta 1, e adiciona 23
// console.log(idades);

// Varrer array
for (var i = 0; i < idades.length; i++) {
    // console.log(idades[i]);
}


/* Outro exemplo */
var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); // concatenar arrays
// console.log(rest);

rest = impares.concat(pares); // concatenar arrays
// console.log(rest);

rest.sort(function (a, b) { return a - b; });
// console.log(rest);


// 4 x 4 matriz
var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

/*
    [
        [ 1,  2,  3,  4], // linha 0
        [ 5,  6,  7,  8], // linha 1
        [ 9, 10, 11, 12], // linha 2
        [13, 14, 15, 16]  // linha 3
    ]
*/

//console.log(tabuleiro[0][0]); // linha 0 coluna 0 -> 1
// console.log(tabuleiro[2][2]); // linha 2 coluna 2 -> 11