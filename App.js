import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import Home from './components/Home.js';
import Dicionario from './components/Dicionario/Dicionario.js';
import Quiz from './components/Quiz/Quiz.js';
import SiglaDetalhe from './components/Dicionario/SiglaDetalhe.js';
import Ranking from './components/Quiz/Ranking.js';
import GameOver from './components/Quiz/GameOver.js';
import Game from './components/Quiz/Game.js';
import EnviarPlacar from './components/Quiz/EnviarPlacar.js';
import { cores } from './components/UI/cores.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="autok" />
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: cores.corBotao 
          },
          headerTintColor: cores.corTexto,
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: ''}} 
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
        <Stack.Screen 
          name="SiglaDetalhe"
          component={SiglaDetalhe}
          options={{ title: 'Sigla' }}
        />
        <Stack.Screen 
          name="Ranking"
          component={Ranking}
          options={{ title: 'Ranking' }}
        />
        <Stack.Screen 
          name="GameOver"
          component={GameOver}
          options={{ title: 'Game Over'}}
        />
        <Stack.Screen 
          name="Game"
          component={Game}
          options={{ title: ''}}
        />
        <Stack.Screen 
          name="EnviarPlacar"
          component={EnviarPlacar}
          options={{ title: ''}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
