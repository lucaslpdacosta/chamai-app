const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../database/connection');
require('dotenv').config();

const criarToken = (user) => {
    const token = jwt.sign({ id: user.id }, process.env.SECRET, { expiresIn: '1h' });
    return token;
};

const retornarToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.SECRET);
        return decoded;
    } catch (error) {
        throw new Error('erro ao processar token');
    }
};

const login = async (email, senha) => {
    const [usuarios] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
    if (usuarios.length === 0) {
        throw new Error('Invalid email or senha');
    }
    const user = usuarios[0];
    const issenhaValid = await bcrypt.compare(senha, user.senha);
    if (!issenhaValid) {
        throw new Error('Invalid email or senha');
    }
    const token = criarToken(user);
    return { token };
};

const autenticarToken = (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return res.status(401).json({ error: 'token nao foi passado' });
    }
    try {
        const decoded = retornarToken(token);
        req.user = { id: decoded.id };
        next();
    } catch (error) {
        return res.status(401).json({ error: 'token invalido' });
    }
};

module.exports = {
    login,
    autenticarToken,
};