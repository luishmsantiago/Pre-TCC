import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === 'admin' && senha === 'admin') {
      console.log('Login bem-sucedido!');
      navigation.navigate('Escolha');
    } else {
      console.log('Credenciais inválidas.');
    }
  };

  const handleForgot = () => {
    console.log('Navegando para recuperar senha...');
  };

  const handleRegister = () => {
    console.log('Navegando para cadastro...');
  };

  const handleFb = () => {
    console.log('Cadastrando com Facebook...');
  }
  const handleGoogle = () => {
    console.log('Cadastrando com Google...');
  }
  
  return (
    <ScrollView  contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.webp')} style={styles.imagem} />
        <Text style={styles.title}>Bem-vindo ao MovMeter</Text>
        <StatusBar style="auto" />
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry={true}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View style={styles.rowContainer}>
          <TouchableOpacity style={styles.register} onPress={() => navigation.navigate('Inscricao')}>
            <Text style={styles.txtregister}>Cadastrar-me</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgot} onPress={() => navigation.navigate('Forgot')}>
            <Text style={styles.txtforgot}>Esqueci minha senha</Text>          
          </TouchableOpacity>
          </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Escolha')}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.rowRedes}>
          <TouchableOpacity style={styles.FbRegister} onPress={handleFb}>
            <Image 
            source={require('../../assets/fblogo.png')} 
            style={styles.Fbimg}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.GoogleRegister} onPress={handleGoogle}>
            <Image 
            source={require('../../assets/googlelogo.png')} 
            style={styles.Fbimg}/>          
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 100
  },
  imagem: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center'
  },
  title: {
    fontSize: 25,
    marginTop: 30,
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    width: '80%',
    borderRadius: 5,
    marginBottom: 15,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  forgot: {
    alignSelf: 'flex-end',
    paddingBottom: 30,
  },
  txtforgot: {
    color: '#4a92fa',
    textDecorationLine: 'underline',
  },
  txtregister: {
    color: '#4a92fa',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#4a92fa',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  rowRedes: {
    flexDirection: 'row', // Organiza itens em linha
    justifyContent: 'space-evenly', // Espaça os itens uniformemente
    width: '80%',
    marginTop: 20, // Espaçamento do conteúdo acima
  },
  FbRegister: {
    alignItems: 'center', // Centraliza o conteúdo
    justifyContent: 'center',
    padding: 10,
  },
  GoogleRegister: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  Fbimg: {
    width: 40, // Largura ajustada
    height: 40, // Altura ajustada
    resizeMode: 'contain', // Ajusta a imagem ao tamanho sem distorcer
  },  
});
