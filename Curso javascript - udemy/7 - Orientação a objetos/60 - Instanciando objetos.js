// Nomes de classes devem sempre iniciar com maiuscula
class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome() {
        return this._nome;
    }

    set nome(nome) {
        this._nome = nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    set sobrenome(sobrenome) {
        this._sobrenome = sobrenome;
    }

    falar(msg) {
        console.log(`${this.nome} está falando ${msg}`)
    }

    comer() {
        console.log(`${this.nome} está comendo... `)
    }

    beber() {
        console.log(`${this.nome} ${this.sobrenome} está bebendo... `)
    }
}

class Carro {
    constructor(modelo) {
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    imprimir() {
        console.log(`${this._marca} - ${this._modelo}`)
    }

    get marca() {
        return this.marca;
    }

    get modelo() {
        return this.modelo;
    }

    set modelo(modelo) {
        this.modelo = modelo;
    }
}

// Instanciação de objetos

// Forma 1
// const curso = new Object();
// curso.nome = 'Programação em Javascript';
// curso.preco = 27.89;

// console.log(curso)

// curso ['qtd_alunos'] = 999;

// console.log(curso)

// delete curso['qtd_alunos'];

// console.log(curso)

// delete curso['preco'];

// console.log(curso)



// Forma 2 - Objeto literal

const programa = {
    nome: 'Photoshop',
    preco: 9999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da paz, 45',
            bairro: 'Nova lima',
            cidade: 'São Paulo'
        },
        filiais: [
            { cidade: 'Rio de janeiro' },
            { cidade: 'Recife' }
        ]
    }
}

// console.log(programa)
// console.log(programa.fabricante.filiais)
// console.log(programa.fabricante.filiais.length) // 2
// // Outra forma de acessar os atributos
// console.log (programa ['fabricante']['filiais'])

programa.nome = 'Playstation OS';

// console.log(programa)

// delete programa.fabricante.filiais; // deletando filiais
// console.log(programa.fabricante.filiais) // undefined
// console.log(programa.fabricante.filiais.length) // Error



// Forma 3 - Objeto literal
// const pessoa = {};

// console.log(typeof(pessoa))

// pessoa.nome = 'Guilherme';

// console.log(pessoa.nome)



// Forma 4 - Função construtora
function Lampada(cor){
    this.cor = cor;
}
const l1 = new Lampada('Branca');
// console.log(l1)
// console.log(l1.cor)



// Forma 5 - Objeto a partir das nossas classes
// const p1 = new Pessoa('Gui','Silva');
// console.log(p1)
// console.log(typeof(p1))
// console.log(p1.nome)
// p1.nome = 'Guilherme'
// console.log(p1.nome)
// p1.falar('Olá')
// p1.comer();
// p1.beber();



// const fit = new Carro('Fit');
// fit.imprimir();
// fit._modelo = 'HRV';
// fit.imprimir();