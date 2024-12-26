import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';

export default function ForgotScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <TouchableOpacity style={styles.voltar} onPress={() => navigation.goBack()}>
        <Text style={styles.voltarText}>Voltar</Text>
      </TouchableOpacity>
      <View style={styles.containerPrincipal}>
        <Text style={styles.title}>Termos e Condições</Text>
        <StatusBar style="auto" />
        <View style={styles.termosContainer}>
          <Text style={styles.termos}>
            <Text style={styles.termosTitle}>1. Aceitação dos Termos{"\n"}</Text>
            Ao acessar ou utilizar este aplicativo, você concorda em cumprir e estar vinculado aos seguintes Termos e Condições de Uso. Caso não concorde com estes termos, não utilize o aplicativo.{"\n\n"}
            <Text style={styles.termosTitle}>2. Alterações nos Termos{"\n"}</Text>
            Reservamo-nos o direito de modificar ou atualizar estes Termos e Condições a qualquer momento, sem aviso prévio. É de sua responsabilidade revisar os termos periodicamente.{"\n\n"}
            <Text style={styles.termosTitle}>3. Uso do Aplicativo{"\n"}</Text>
            O uso deste aplicativo é destinado a fins pessoais e não comerciais. Você concorda em não utilizar o aplicativo de maneira que viole quaisquer leis ou regulamentos aplicáveis.{"\n\n"}
            <Text style={styles.termosTitle}>4. Cadastro de Usuário{"\n"}</Text>
            Para acessar determinados recursos, pode ser necessário realizar um cadastro, fornecendo informações precisas, completas e atualizadas. Você é responsável por manter a confidencialidade das suas informações de login.{"\n\n"}
            <Text style={styles.termosTitle}>5. Privacidade{"\n"}</Text>
            Respeitamos sua privacidade. As informações fornecidas por você serão tratadas de acordo com nossa Política de Privacidade.{"\n\n"}
            <Text style={styles.termosTitle}>6. Propriedade Intelectual{"\n"}</Text>
            Todos os conteúdos do aplicativo, incluindo textos, gráficos, logos, ícones e imagens, são de propriedade exclusiva da nossa empresa ou licenciados para uso, sendo protegidos por leis de direitos autorais e propriedade intelectual.{"\n\n"}
            <Text style={styles.termosTitle}>7. Limitação de Responsabilidade{"\n"}</Text>
            Não nos responsabilizamos por quaisquer danos diretos ou indiretos decorrentes do uso ou incapacidade de uso do aplicativo.{"\n\n"}
            <Text style={styles.termosTitle}>8. Rescisão{"\n"}</Text>
            Podemos suspender ou encerrar seu acesso ao aplicativo a qualquer momento, sem aviso prévio, caso você viole estes Termos e Condições.{"\n\n"}
            <Text style={styles.termosTitle}>9. Lei Aplicável{"\n"}</Text>
            Estes Termos e Condições são regidos pelas leis do Brasil. Qualquer disputa será resolvida exclusivamente nos tribunais da jurisdição competente.{"\n\n"}
            <Text style={styles.termosTitle}>10. Contato{"\n"}</Text>
            Se tiver dúvidas sobre estes Termos e Condições, entre em contato conosco pelo e-mail suporte@app.com.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#f9f9f9',
  },
  containerPrincipal: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  termosContainer: {
    padding: 10,
  },
  termos: {
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'justify',
    color: '#333',
  },
  termosTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a92fa',
  },
  voltar: {
    marginTop:10, 
    marginBottom: 10,
  },
  voltarText: {
    color: '#4a92fa',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});
