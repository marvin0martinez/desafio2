import { StyleSheet, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, Fontisto } from '@expo/vector-icons';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Planetas from "./Screens/Planetas";
import Solar from "./Screens/Solar";

export default function App() {
  const Tab = createBottomTabNavigator();
  const TabNavigator = () => (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor: "#0a63e9",
        tabBarActiveTintColor: "#1c5169",
        backgroundColor: "#0000",
        tabBarActiveBackgroundColor: "rgba(163, 162, 162, 0.8)",
        tabBarInactiveBackgroundColor: "rgba(153, 147, 147, 0.8)",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Systems") {
            iconName = focused ? 'planet' : 'planet-outline'; // Iconos para la ruta "Systems"
            return <Ionicons name={iconName} size={size} color={color} />;
          } else if (route.name === "List") {
            iconName = focused ? 'sun' : 'sun'; // Iconos para la ruta "Galaxy"
            return <Fontisto name={iconName} size={size} color={color} />;
          }
        },
      })}
    >
      <Tab.Screen name="Systems" component={Planetas} />

      <Tab.Screen name="List" component={Solar} />

    </Tab.Navigator>
  );
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#edd8eb",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
