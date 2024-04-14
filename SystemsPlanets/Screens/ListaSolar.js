import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  LogBox,
} from "react-native";
const ListaSolar = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetchPlaces();
  }, []);
  const fetchPlaces = async () => {
    try {
      const response = await fetch(
        "https://mocki.io/v1/62330b56-5102-4fa3-88fe-ad72f41971c6"
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  };
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetalleSolar", { tips: item })}
    >
      <View style={styles.List}>
        <Image source={{ uri: item.imagen }} style={styles.ImagenM} />
        <View style={styles.ListaText}>
          <Text style={styles.TextNombre}>{item.nombre}</Text>
          <Text style={styles.TextTipo}>{item.tipo}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        renderItem={renderItem}
        keyExtractor={(item) => item.nombre.toString()}
        contentContainerStyle={styles.countryList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e9eb"
  },
  ImagenM: {
    width: 100,
    height: 50,
    marginRight: 10,
  },
  Lista: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBlockEndColor: "#000000",
  },
  ListaText: {
    alignItems: "left",
    padding: 10,
  },
  TextNombre: {
    fontSize: 20,
  },
  TextTipo: {
    fontSize: 15,
    color: "#ec720d",
  },
});
export default ListaSolar;
