function isPalindromo(valor) {
    const agrArray = valor.split('')
    // console.log(agrArray)
    const invertido = []
    agrArray.forEach(function (dados) {
        invertido.unshift(dados)
    })
    // console.log(invertido)
    let stringInvertida = invertido.toString()
    // console.log(valor)
    // console.log(stringInvertida)
    stringInvertida = stringInvertida.replaceAll(',', '')
    // console.log(`O valor invertido é ${stringInvertida}`)
    if (stringInvertida === valor) {
        return true
    } else {
        return false
    }
}

let a = isPalindromo('emamame')
console.log(a)