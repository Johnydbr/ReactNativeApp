import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';

import Professor from './src/pages/professor';
import professorconsulta from './src/pages/professorconsulta';
import professorinserir from './src/pages/professorinserir';
import professorparametro from './src/pages/professorparametro';

import Aluno from './src/pages/aluno';
import alunoconsulta from './src/pages/alunoconsulta';
import alunoinserir from './src/pages/alunoinserir';
import alunoparametro from './src/pages/alunoparametro';

import Visitante from './src/pages/visitante';
import visitanteinserir from './src/pages/visitanteinserir';
import visitanteconsultar from './src/pages/visitanteconsultar';
import visitanteparametro from './src/pages/visitanteparametro';

const Stack = createNativeStackNavigator ();

export default function App (){

return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="aluno" component={Aluno}/>
      <Stack.Screen name="professor" component={Professor}/>
      <Stack.Screen name="visitante" component={Visitante}/>
      <Stack.Screen name="professorconsulta" component={professorconsulta}/>
      <Stack.Screen name="professorinserir" component={professorinserir}/>
      <Stack.Screen name="professorparametro" component={professorparametro}/>
      <Stack.Screen name="alunoconsulta" component={alunoconsulta}/>
      <Stack.Screen name="alunoinserir" component={alunoinserir}/>
      <Stack.Screen name="alunoparametro" component={alunoparametro}/>
      <Stack.Screen name="visitanteinserir" component={visitanteinserir}/>
      <Stack.Screen name="visitanteconsultar" component={visitanteconsultar}/>
      <Stack.Screen name="visitanteparametro" component={visitanteparametro}/>
    </Stack.Navigator>
  </NavigationContainer>
)

}