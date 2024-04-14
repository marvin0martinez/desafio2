import React, { useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Dimensions,
  TextInput,
  ImageBackground,
} from "react-native";
import { SearchBar } from "react-native-screens";

const windowWidth = Dimensions.get("window").width;
const img = {
  uri: "https://diariohoynet.nyc3.cdn.digitaloceanspaces.com/adjuntos/galerias/000/533/0000533430.jpg",
};

const ListaPlanetas = ({ navigation }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
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
      style={styles.countryCard}
      onPress={() => navigation.navigate("DetallePlanetas", { country: item })}
    >
      <View style={styles.countryInfo}>
      <Image source={{ uri: item.Imagen }} style={styles.flagImage} />
        <Text style={styles.countryName}>{item.nombre}</Text>
      </View>
    </TouchableOpacity>
  );

  const filteredCountries = countries.filter(country =>
    country.nombre.toLowerCase().includes(search.toLowerCase())
  );


  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.image}>
        <TextInput
          style={styles.searchBar}
          placeholder="Buscar Planeta..."
          onChangeText={text => setSearch(text)}
          value={search}
        />
        <FlatList
          data={filteredCountries}
          renderItem={renderItem}
          keyExtractor={item => item.ID.toString()}
          contentContainerStyle={styles.countryList}
          numColumns={1}
        />
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#000000a1",
  },
  SearchBar: {
    flex: 1
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  countryList: {
    padding: 10,
  },
  countryCard: {
    width: windowWidth / 1 - 25, // Ajusta el ancho para mostrar dos países por fila
    margin: 5,
    borderRadius: 8,
    borderWidth: 5,
    borderColor: "#2b292b",
    overflow: "hidden", // Para que la bandera no sobresalga del borde de la tarjeta
    backgroundColor: "#000000a1",
  },
  countryInfo: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  flagImage: {
    width: "100%",
    aspectRatio: 1, // Ajustar el aspecto de la bandera
    resizeMode: "center", // Ajustar la imagen para cubrir toda el área
  },
  countryName: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 5,
    color: "#52e555",
  },
  searchBar: {
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: 'white',
  },
});
export default ListaPlanetas;
