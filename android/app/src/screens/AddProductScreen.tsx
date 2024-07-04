import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddProductScreen: React.FC = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const navigation = useNavigation();

  const handleAddProduct = () => {
 
    console.log("Producto agregado");
  };

  const handleResetForm = () => {
    setId('');
    setName('');
    setDescription('');
    setLogo('');
    setReleaseDate('');
  };

  return (
    <View style={styles.container}>
      <Text>ID:</Text>
      <TextInput value={id} onChangeText={setId} style={styles.input} />
      <Text>Nombre:</Text>
      <TextInput value={name} onChangeText={setName} style={styles.input} />
      <Text>Descripción:</Text>
      <TextInput value={description} onChangeText={setDescription} style={styles.input} />
      <Text>Logo:</Text>
      <TextInput value={logo} onChangeText={setLogo} style={styles.input} />
      <Text>Fecha de Liberación:</Text>
      <TextInput value={releaseDate} onChangeText={setReleaseDate} style={styles.input} />

      <Button title="Agregar" onPress={handleAddProduct} />
      <Button title="Reiniciar" onPress={handleResetForm} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default AddProductScreen;
