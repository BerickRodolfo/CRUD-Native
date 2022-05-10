import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './src/screens/Home';
import theme from './src/global/styles/theme';
import { Form } from './src/screens/Form';

const Stack = createNativeStackNavigator(); 

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style='auto'/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home}/>
          <Stack.Screen name="Form" component={Form}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

