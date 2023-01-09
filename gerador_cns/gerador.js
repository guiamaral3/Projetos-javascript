const express = require('express');
const app = express();
const port = 3000;
app.get('/gerarCNS', (req, res) => {
    res.send({ cns: getCns() });
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))

function getCns() {
    let cns = 0; while (cns.length !== 15) {
        let n1 = Math.floor((Math.random() * 3) + 1); if (n1 === 3)
            n1 = Math.floor((Math.random() * 3) + 7); const n2 = Math.floor((Math.random() * 99999) + 1); const n3 = Math.floor((Math.random() * 99999) + 1); cns = n1 + ("0" + n2).slice(-5) + ("0" + n3).slice(-5); let soma = (((Number(cns.substring(0, 1))) * 15) +
                ((Number(cns.substring(1, 2))) * 14) +
                ((Number(cns.substring(2, 3))) * 13) +
                ((Number(cns.substring(3, 4))) * 12) +
                ((Number(cns.substring(4, 5))) * 11) +
                ((Number(cns.substring(5, 6))) * 10) +
                ((Number(cns.substring(6, 7))) * 9) +
                ((Number(cns.substring(7, 8))) * 8) +
                ((Number(cns.substring(8, 9))) * 7) +
                ((Number(cns.substring(9, 10))) * 6) +
                ((Number(cns.substring(10, 11))) * 5)); let resto = soma % 11; let dv = 11 - resto; dv = (dv === 11) ? 0 : dv; if (dv === 10) {
                    soma = (((Number(cns.substring(0, 1))) * 15) +
                        ((Number(cns.substring(1, 2))) * 14) +
                        ((Number(cns.substring(2, 3))) * 13) +
                        ((Number(cns.substring(3, 4))) * 12) +
                        ((Number(cns.substring(4, 5))) * 11) +
                        ((Number(cns.substring(5, 6))) * 10) +
                        ((Number(cns.substring(6, 7))) * 9) +
                        ((Number(cns.substring(7, 8))) * 8) +
                        ((Number(cns.substring(8, 9))) * 7) +
                        ((Number(cns.substring(9, 10))) * 6) +
                        ((Number(cns.substring(10, 11))) * 5) + 2); resto = soma % 11; dv = 11 - resto; cns += "001" + String(dv);
                } else { cns += "000" + String(dv); }
                return cns
    }
}