import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { login } from '../../../api';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const Login = async () => {
    try {
      const response = await login(email, senha);
      console.log(response);
      navigation.navigate('Home');
    } catch (error) {
      console.error(error);
      console.log(error.response);
    }
  };

  const redirectCadastro = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="senha"
        value={senha}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry
      />
      <Button title="Login" onPress={Login} />
      <Button title="Register" onPress={redirectCadastro} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default Login;