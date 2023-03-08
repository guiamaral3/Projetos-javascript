// Criando classe person
class Person {
  // Metodo construtor
  constructor(nome) {
    this.nome = nome;
  }

  // Criando uma funcao
  falarNome() {
    return `Olá, Meu nome é ${this.nome}`;
  }
}

// Exportando classe person
module.exports = {
  Person,
};
