// Nomes de classes devem sempre iniciar com maiuscula
class Pessoa {
    constructor(nome, sobrenome) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome() {
        return this.nome;
    }

    set nome(nome) {
        this.nome = nome;
    }

    get sobrenome() {
        return this.sobrenome;
    }

    set sobrenome(sobrenome) {
        this.sobrenome = sobrenome;
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
        console.log(`${this.marca} - ${this.modelo}`)
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

