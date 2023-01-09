const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));
app.use(cors());

// Onde guarda os livros
let books = [];

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/book', (req, res) => {
    const book = req.body;

    // Exibir no console para debugar
    console.log(book);
    books.push(book);

    res.send('O livro foi adicionado!');
});

app.get('/books', (req, res) => {
    res.json(books);
});

