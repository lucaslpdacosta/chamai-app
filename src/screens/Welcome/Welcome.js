import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image } from 'react-native';

const Welcome = ({ navigation }) => {
  const fazerLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Text style={styles.tituloHeader}>GAME/ACADEMY</Text>
      </View>
      <View style={styles.containerImagem}>
        <Image
          source={require('../../../assets/welcome.png')}
          style={styles.imagem}
        />
        <Text style={styles.titulo}>Já pensou em aprender a programar jogando?</Text>
        <Text style={styles.textoDescricao}>
          Com a Game Academy, você pode aprender de forma dinâmica!
        </Text>
      </View>
      <View style={styles.containerBotao}>
        <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
          <Text style={styles.textoBotao}>Começar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  containerHeader: {
    backgroundColor: '#FFFFFF',
    paddingTop: 50,
    paddingBottom: 20,
    alignItems: 'center',
  },
  tituloHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4747D1',
  },
  containerImagem: {
    flex: 1,
    alignItems: 'center',
    marginTop: '25%',
  },
  imagem: {
    width: 240,
    height: 240,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 30,
    textAlign: 'center',
    color: '#0D0D0D',
    width: '85%',
  },
  textoDescricao: {
    fontSize: 16,
    marginTop: 15,
    textAlign: 'center',
    color: '#333333',
    width: '80%',
  },
  containerBotao: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    backgroundColor: '#4747D1',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginTop: 50,
    width: '85%',
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default Welcome;