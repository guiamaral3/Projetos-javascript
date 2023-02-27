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
        this._nome = nome_completo.shift()
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


// const c1 = new Cliente('Guilherme', 'Silva', 'guilherme.silva@qsaude.com.br', '495.228.988-56', 10.000)
// const c2 = new Cliente('Edson', 'Vasconcelos', 'edson.vasconcelos@qsaude.com.br', '012.345.678-90', 45.000)

// console.log(c1)
// console.log(c2)
// console.log(c1.nome_completo)
// c1.nome_completo = 'Joao teste'
// console.log(c1.nome_completo)
// c2.imprimir_dados();

const programador = new Funcao('Programador',4899.54);
const suporte = new Funcao('Suporte', 2799.34);

// console.log(programador)
// console.log(suporte)

const f1 = new Funcionario('Pedro','Alves','predro.alves@qsaude.com.br','495.228.988-56',programador,1)
const f2 = new Funcionario('Gustavo','Alves','gustavo.alves@qsaude.com.br','495.228.988-56',suporte,2)

console.log(f1.funcao.salario)
f1.imprimir_dados()
