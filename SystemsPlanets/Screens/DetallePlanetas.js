import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";


const DetallePlanetas = ({ route, navigation }) => {
  const { country } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Detalles de la galaxia </Text>
      <View style={styles.detailsContainer}>
      <Image source={{ uri: country.Imagen }} style={styles.flagImage} />
        <Text>
          <Text style={styles.label}>Nombre: </Text>
          {country.nombre}
        </Text>
        <Text>
          <Text style={styles.label}>Tipo: </Text>
          {country.tipo}
        </Text>
        <Text>
          <Text style={styles.label}>Masa: </Text>
          {country.masa}
        </Text>
        <Text>
          <Text style={styles.label}>Radio: </Text>
          {country.radio}
        </Text>
        <Text>
          <Text style={styles.label}>distancia media al sol: </Text>
          {country.distancia_media_al_sol}
        </Text>
        <Text>
          <Text style={styles.label}>periodo orbital: </Text>
          {country.periodo_orbital}
        </Text>
        <Text>
          <Text style={styles.label}>periodo rotacion: </Text>
          {country.periodo_rotacion}
        </Text>
        <Text>
          <Text style={styles.label}>numero de lunas: </Text>
          {country.numero_de_lunas}
        </Text>
      </View>
      <Button title="Volver" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3664a0"
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailsContainer: {
    backgroundColor: "#b2b4b7",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 8,
    padding: 20,
    width: "80%",
  },
  label: {
    fontWeight: "bold",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  flagImage: {
    width: "100%",
    aspectRatio: 1, // Ajustar el aspecto de la bandera
    resizeMode: "center", // Ajustar la imagen para cubrir toda el área
    borderColor: "#000000",
  },
});
export default DetallePlanetas;
