import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home.js';
import Dicionario from './components/Dicionario.js';
import Quiz from './components/Quiz.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: 'Siglário'}} 
        />
        <Stack.Screen 
          name="Dicionario" 
          component={Dicionario} 
          options={{ title: 'Dicionário'}} 
        />
        <Stack.Screen 
          name="Quiz" 
          component={Quiz} 
          options={{ title: 'Quiz'}} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
