import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Text, StatusBar } from 'react-native';

export default function ForgotScreen({ navigation }) {
    const [email, setEmail] = useState('');

    const handleForgot = () => {
      console.log('Enviando E-mail com Senha.');
    };

  return (
    <ScrollView contentContainerStyle={[styles.container]}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Insira seu e-mail para recuperar a senha</Text>
          <StatusBar style="auto" />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address" // Teclado apropriado para e-mail
            autoCapitalize="none"
            autoCorrect={false}
          />
        <TouchableOpacity
          style={styles.button}
          onPress={handleForgot}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,   
    paddingBottom: 20, // Adicionado para criar espaço no rodapé
  },
  title: {
    fontSize: 20,
    paddingTop: 80,
    marginBottom: 40,

  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 10,
    width: 300,
    borderRadius: 5,
    marginBottom: 15,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4a92fa',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  voltar: {
    position: 'absolute',
    top: 20,
    left: 10,
    paddingHorizontal: 10, // Garantindo espaço interno
    paddingVertical: 5,
    zIndex: 1, // Garante que o botão fique sobre outros elementos
    backgroundColor: '#fff', // Adiciona um fundo branco para evitar sobreposição
  },
  voltarText: {
    color: '#4a92fa',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
});
