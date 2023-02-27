/*
Funcionários
    nome,
    sobrenome,
    email,
    cpf,
    funcao,
    registro

Clientes
    nome,
    sobrenome,
    email,
    cpf,
    renda

Funcoes
    descricao
    salario
*/

class Pessoa {
    constructor(nome, sobrenome, email, cpf) {
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
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

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    get cpf() {
        return this._cpf;
    }

    set cpf(cpf) {
        this._cpf = cpf;
    }

    get nome_completo() {
        return this._nome + ' ' + this._sobrenome
    }

    set nome_completo(nome_completo) {
        nome_completo = nome_completo.split(' ') // Transforma a string em array, separando pelo espaço
        this._nome = nome_completo.shift() // Remover o primeiro item do array e retorna
        this._sobrenome = nome_completo.join(' ') // Transforma array em string, separando com espaço
    }

    imprimir_dados(){
        console.log(`${this._nome} ${this._sobrenome}`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, sobrenome, email, cpf, funcao, registro) {
        super(nome, sobrenome, email, cpf)
        this._funcao = funcao
        this._registro = registro
    }

    get funcao() {
        return this._funcao;
    }

    set funcao(funcao) {
        this._funcao = funcao
    }

    get registro() {
        return this._registro;
    }

    set registro(registro) {
        this._registro = registro
    }

    imprimir_dados(){ // Polimorfismo
        super.imprimir_dados()
        console.log(`${this.registro} ${this.funcao.salario} `)
    }
}

class Cliente extends Pessoa {
    constructor(nome, sobrenome, email, cpf, renda) {
        super(nome, sobrenome, email, cpf)
        this._renda = renda
    }

    get renda() {
        return this._renda;
    }

    set renda(renda) {
        this._renda = renda;
    }
}

class Funcao {
    constructor(descricao, salario) {
        this._descricao = descricao;
        this._salario = salario;
    }
    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }

    get salario() {
        return this._salario;
    }

    set salario(salario) {
        this._salario = salario;
    }
}

const prog = new Funcao('Programador',5987.44)

const f1 = new Funcionario('Paulo','Ferreira','paulo.ferreira@qsaude.com.br','495.228.988-56',prog,3)

const c1 = new Cliente('Joana','Darc','joana.darc@qsaude.com.br','495.228.988-56',2704.67)

f1.imprimir_dados()

c1.imprimir_dados()

/*
 Polimorfismo - Quando 2 objetos do mesmo tipo tem comportamentos DIFERENTES, como no exemplo acima em que o metodo de imprimir dados 
foi modificado para Funcionario 
*/