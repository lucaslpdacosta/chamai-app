const db = require('../database/connection');
const bcrypt = require('bcrypt');
const { login } = require('../middleware/auth');

const usuarioController = {
    cadastrarUsuario: async (req, res) => {
        const { nome, email, senha } = req.body;

        try {
            const num = 10;
            const salt = await bcrypt.genSalt(num);
            const encrypt = await bcrypt.hash(senha, salt);

            const [result] = await db.query(
                'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)',
                [nome, email, encrypt]
            );
            res.json({ mensagem: 'usuario inserido com sucesso', id: result.insertId });
        } catch (error) {
            res.status(500).json({ erro: 'erro ao inserir usuario' });
        }
    },

    login: async (req, res) => {
        const { email, senha } = req.body;
        try {
            const { token } = await login(email, senha);
            const [result] = await db.query('SELECT nome FROM usuarios WHERE email = ?', [email]);
            const nome = result[0].nome;
            res.json({ token, nome });
        } catch (error) {
            res.status(401).json({ erro: 'dados invalidos' });
        }
    },
};

module.exports = usuarioController;