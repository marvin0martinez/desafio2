import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
const DetalleSolar = ({ route, navigation }) => {
  const { tips } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.heading}> Detalles </Text>
      <View style={styles.detailsContainer}>
      <Image source={{ uri: tips.Imagen }} style={styles.flagImage} />
        <Text>
          <Text style={styles.label}>Nombre: </Text>
          {tips.nombre}
        </Text>
        <Text>
          <Text style={styles.label}>Tipo: </Text>
          {tips.tipo}
        </Text>
        <Text>
          <Text style={styles.label}>Masa: </Text>
          {tips.masa}
        </Text>
        <Text>
          <Text style={styles.label}>Radio: </Text>
          {tips.radio}
        </Text>
        <Text>
          <Text style={styles.label}>distancia media al sol: </Text>
          {tips.distancia_media_al_sol}
        </Text>
        <Text>
          <Text style={styles.label}>periodo orbital: </Text>
          {tips.periodo_orbital}
        </Text>
        <Text>
          <Text style={styles.label}>periodo rotacion: </Text>
          {tips.periodo_rotacion}
        </Text>
        <Text>
          <Text style={styles.label}>numero de lunas: </Text>
          {tips.numero_de_lunas}
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
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  detailsContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 20,
    width: "80%",
  },
  label: {
    fontWeight: "bold",
  },
  flagImage: {
    width: "100%",
    aspectRatio: 1, // Ajustar el aspecto de la bandera
    resizeMode: "center", // Ajustar la imagen para cubrir toda el área
    borderColor: "#000000",
  },
});
export default DetalleSolar;
