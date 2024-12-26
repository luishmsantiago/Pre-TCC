import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, ScrollView, Text, StatusBar } from 'react-native';

export default function InscricaoScreen({ navigation }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [telefone, setTelefone] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

  function formatarDataNascimento(text) {
    // Remove tudo que não for número
    const textoLimpo = text.replace(/\D/g, '');
    
    // Adiciona as barras no formato DD/MM/AAAA
    const formatado = textoLimpo
      .replace(/^(\d{2})(\d)/, '$1/$2') // Adiciona a primeira barra após DD
      .replace(/(\d{2})\/(\d{2})(\d)/, '$1/$2/$3'); // Adiciona a segunda barra após MM
      
    // Retorna a data formatada (máximo de 10 caracteres)
    return formatado.substring(0, 10);
  }
  const [isChecked, setIsChecked] = useState(false);

  const handleTermos = () => {
    console.log('Navegando para Termos e Condições');
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.title}>Inscreva-se:</Text>
          <StatusBar style="auto" />
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            autoCapitalize="words" // Capitaliza a primeira letra
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            value={sobrenome}
            onChangeText={setSobrenome}
            autoCapitalize="words" // Capitaliza a primeira letra
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address" // Teclado apropriado para e-mail
            autoCapitalize="none"
            autoCorrect={false}
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={true} // Oculta a senha
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Endereço"
            value={endereco}
            onChangeText={setEndereco}
            autoCapitalize="sentences" // Capitaliza início de frases
            autoCorrect={true}
          />
          <TextInput
            style={styles.input}
            placeholder="Número"
            value={numero}
            onChangeText={setNumero}
            keyboardType="numeric" // Teclado apenas com números
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Complemento"
            value={complemento}
            onChangeText={setComplemento}
            autoCapitalize="sentences"
            autoCorrect={true}
          />
          <TextInput
            style={styles.input}
            placeholder="CEP"
            value={cep}
            onChangeText={setCep}
            keyboardType="numeric" // Teclado apenas com números
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            keyboardType="phone-pad" // Teclado para números de telefone
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento (DD/MM/AAAA)"
            value={dataNascimento}
            onChangeText={(text) => setDataNascimento(formatarDataNascimento(text))}
            keyboardType="numeric" // Teclado apenas com números
            autoCapitalize="none"
          />
          <View style={styles.containerCb}>
            <TouchableOpacity
              style={[styles.checkbox, isChecked && styles.checked]}
              onPress={() => setIsChecked(!isChecked)} // Marca/desmarca a checkbox
            />
            <TouchableOpacity onPress={() => navigation.navigate('Termos')}>
              <Text style={styles.label}>Aceito os Termos e Condições</Text>
            </TouchableOpacity>
          </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Escolha')}
      >
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
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
    fontSize: 30,
    paddingTop: 60,
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
    backgroundColor: '#4a92fa',
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  containerCb: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20, // Espaço antes do botão
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#4a92fa',
    borderRadius: 3,
    backgroundColor: '#fff',
  },
  checked: {
    backgroundColor: '#4a92fa',
  },
  label: {
    marginLeft: 8,
    fontSize: 16,
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
