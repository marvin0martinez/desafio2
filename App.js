import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from './Screens/Inicio';
import Registro from './Screens/Registro';
import MostrarEvento from './Screens/mostrar';
import EditarEvento from './Screens/EditarEvento';
import Evento from './Screens/evento';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={Inicio} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Evento" component={Evento} />
        <Stack.Screen name="MostrarEvento" component={MostrarEvento} />
        <Stack.Screen name="EditarEvento" component={EditarEvento} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
