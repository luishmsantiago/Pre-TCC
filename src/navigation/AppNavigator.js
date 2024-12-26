import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import EscolhaArticulacaoScreen from '../screens/EscolhaArticulacaoScreen';
import PrincipalScreen from '../screens/PrincipalScreen';
import InscricaoScreen from '../screens/InscricaoScreen';
import ForgotScreen from '../screens/ForgotScreen';
import TermosScreen from '../screens/TermosScreen';


const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{
    headerShown: false,}}>
        <Stack.Screen name="Login"  component={LoginScreen} />
        <Stack.Screen name="Escolha" component={EscolhaArticulacaoScreen} />
        <Stack.Screen name="Principal" component={PrincipalScreen} />
        <Stack.Screen name="Inscricao" component={InscricaoScreen} />
        <Stack.Screen name="Forgot" component={ForgotScreen} />
        <Stack.Screen name="Termos" component={TermosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
