import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SolarList from "./ListaSolar";
import DetalleSolar from "./DetalleSolar";
const Stack = createStackNavigator();
const Solar = () => {
  return (
    <Stack.Navigator initialRouteName="Solar">
      <Stack.Screen
        name="Solar"
        component={SolarList}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetalleSolar"
        component={DetalleSolar}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default Solar;
