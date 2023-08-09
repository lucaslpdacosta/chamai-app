const express = require('express');
const usuarioController = require('./controllers/usuarioController');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post('/usuarios', usuarioController.cadastrarUsuario);

app.post('/login', usuarioController.login);

const porta = 3000;
app.listen(porta, () => {
  console.log(`servidor rodando na porta ${porta}`);
});