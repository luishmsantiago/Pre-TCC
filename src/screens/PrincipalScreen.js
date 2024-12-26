import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function PrincipalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à tela Principal!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
