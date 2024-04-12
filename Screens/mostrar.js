import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MostrarEvento = ({ navigation }) => {
  const [evento, setEvento] = useState(null);

  useEffect(() => {
    obtenerEventoGuardado();
  }, []);

  const obtenerEventoGuardado = async () => {
    try {
      const eventoGuardado = await AsyncStorage.getItem('evento');
      if (eventoGuardado !== null) {
        setEvento(JSON.parse(eventoGuardado));
      }
    } catch (error) {
      console.error('Error al obtener el evento guardado:', error);
    }
  };

  const editarEvento = () => {
    navigation.navigate('EditarEvento', { evento });
  };

  const eliminarEvento = async () => {
    try {
      await AsyncStorage.removeItem('evento');
      setEvento(null);
      alert('Evento eliminado correctamente');
    } catch (error) {
      console.error('Error al eliminar el evento:', error);
      alert('Ocurrió un error al eliminar el evento');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mostrar Evento</Text>
      {evento ? (
        <View>
          <Text>Nombre del Evento: {evento.nombre}</Text>
          <Text>Lugar del Evento: {evento.lugar}</Text>
          <Text>Descripción: {evento.descripcion}</Text>
          <Text>Fecha: {evento.fecha}</Text>
          <Text>Hora: {evento.hora}</Text>
          <TouchableOpacity style={styles.button} onPress={editarEvento}>
            <Text style={styles.buttonText}>Editar Evento</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={eliminarEvento}>
            <Text style={styles.buttonText}>Eliminar Evento</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text>No hay evento guardado</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
  },
});

export default MostrarEvento;