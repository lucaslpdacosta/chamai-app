import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://528d-45-170-116-172.ngrok-free.app',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, senha) => {
  try {
    const response = await api.post('/login', { email, senha });
    const { token, nome } = response.data;
    await AsyncStorage.setItem('@storage_token', token);
    await AsyncStorage.setItem('@storage_nome', nome);
    return token;
  } catch (error) {
    throw error;
  }
};

export const cadastrarUsuario = async (nome, email, senha) => {
  try {
    const response = await api.post('/usuarios', { nome, email, senha });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;