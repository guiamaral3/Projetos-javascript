/*
JSON - JavaScript Object Notation
*/

const curso = {
    nome: 'Promgramacao em javascript',
    horas: 27,
    preco() {
        return this.horas * 0.67
    }
}

// console.log(curso) // Objeto javascript
// // console.log(curso.preco())
// console.log(typeof(curso))



// // Convertendo o objeto javascript para JSON
// const json = JSON.stringify(curso);
// console.log(json) // JSON
// console.log(typeof(json))



// // Convertendo de json para objeto javascript
// const obj = JSON.parse(json);
// console.log(obj);
// console.log(typeof(obj));



const json_certo = '{"nome": "Programacao em javascript", "preco": 27.99}'
console.log(json_certo)
console.log(typeof(json_certo))

const novo_obj = JSON.parse(json_certo)
console.log(novo_obj)
console.log(typeof(novo_obj))
