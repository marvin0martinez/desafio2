import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ListaPlanetas from "./ListaPlanetas";
import DetallePlanetas from "./DetallePlanetas";
const Stack = createStackNavigator();
const Planetas = () => {
  return (
    <Stack.Navigator initialRouteName="Planetas">
      <Stack.Screen
        name="Planetas"
        component={ListaPlanetas}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetallePlanetas"
        component={DetallePlanetas}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Planetas;
