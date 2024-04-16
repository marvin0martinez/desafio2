import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Inicio = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    obtenerDatosGuardados();
  }, []);

  const obtenerDatosGuardados = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');

      if (savedEmail && savedPassword) {
        setEmail(savedEmail);
        setPassword(savedPassword);
      }
    } catch (error) {
      console.error('Error al obtener los datos guardados:', error);
    }
  };

  const validateCredentials = async () => {
    try {
      const savedEmail = await AsyncStorage.getItem('email');
      const savedPassword = await AsyncStorage.getItem('password');
  
      if (email === savedEmail && password === savedPassword) {
      
        navigation.navigate('Evento');
      } else {
        alert('Correo electrónico o contraseña incorrectos');
      }
    } catch (error) {
      console.error('Error al obtener los datos guardados:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={validateCredentials}>
        <Text style={styles.buttonText}>Iniciar sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
        <Text style={styles.link}>¿No tienes cuenta? Regístrate aquí</Text>
      </TouchableOpacity>
    </View>
  );
}

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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
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
  link: {
    marginTop: 20,
  },
});

export default Inicio;
