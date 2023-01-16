const express = require('express')
const app = express()

app.get('/cpf', (req, res) => {
let cpfGenerator = new CPFGenerator()
res.send({ cpf: cpfGenerator.generate()})
})

class CPFGenerator {
    generate() {
        let cpf = "";
        for (let i = 0; i < 9; i++) {
            cpf += Math.floor(Math.random() * 10);
        }
        cpf += this.calculateFirstCheckDigit(cpf);
        cpf += this.calculateSecondCheckDigit(cpf);
        return cpf;
    }

    calculateFirstCheckDigit(cpf) {
        let sum = 0;
        for (let i = 0; i < 9; i++) {
            sum += parseInt(cpf[i]) * (10 - i);
        }
        let checkDigit = 11 - (sum % 11);
        if (checkDigit >= 10) {
            checkDigit = 0;
        }
        return checkDigit;
    }

    calculateSecondCheckDigit(cpf) {
        let sum = 0;
        for (let i = 0; i < 10; i++) {
            sum += parseInt(cpf[i]) * (11 - i);
        }
        let checkDigit = 11 - (sum % 11);
        if (checkDigit >= 10) {
            checkDigit = 0;
        }
        return checkDigit;
    }
}

app.listen(3000, () => {
  console.log('API listening on port 3000!')
})
