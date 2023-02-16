// Criando uma função construtora
function Pessoa(n, s, raca = 'Humano') {
    // atributos privados so conseguimos fazer uso dentro da função construtora
    let altura = 0.30;
    let peso = 0.5;
    let idade = 0;
    let nome = n;
    let sexo = s;


    // atributo publico pode ser acessado fora da função construtora
    this.raca = raca;

    // metodo privado só conseguimos fazer uso dentro da função construtora
    let imprimir_dados = function () {
        console.log(`Nome: ${nome}, Idade: ${idade}, Peso: ${peso}, Altura: ${altura}, Sexo: ${sexo}, Raça: ${raca}`)
    }

    // metodo publico conseguimos acessar fora da função construtora
    this.fazer_aniversario = function () {
        idade += 1;
        imprimir_dados();
    }

    this.getIdade = function () {
        return idade;
    }
}

const p1 = new Pessoa('Guilherme', 'H');
console.log(p1)

console.log(p1.peso) // privado
console.log(p1.raca) // publico
p1.fazer_aniversario() // publico


console.log(p1.getIdade()) // publico

console.log(typeof(Pessoa)) // function
console.log(typeof(p1)) // object