const express = require('express');
const app = express();
const port = 3000;
app.get('/api', (req, res) => {
    res.send({ posso: 'ir embora?'});
});
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))