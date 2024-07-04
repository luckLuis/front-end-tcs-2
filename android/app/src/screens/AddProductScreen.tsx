import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import {validateProduct} from '../utils/validators';
import {Product, ProductErrors} from '../types';

const AddProductScreen = ({navigation}: {navigation: any}) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [reviewDate, setReviewDate] = useState('');
  const [errors, setErrors] = useState<ProductErrors>({});

  const handleAddProduct = () => {
    // Convertir las fechas de string a objetos Date
    const releaseDateObj = new Date(releaseDate);
    const reviewDateObj = new Date(reviewDate);

    const product: Product = {
      id: '', // Aquí deberías asignar el ID según la lógica de tu aplicación
      name,
      description,
      logo,
      releaseDate: releaseDateObj,
      reviewDate: reviewDateObj,
    };

    const validationErrors = validateProduct(product);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
  };

  return (
    <View>
      <TextInput placeholder="Nombre" value={name} onChangeText={setName} />
      {errors.name && <Text>{errors.name}</Text>}
      <TextInput
        placeholder="Descripción"
        value={description}
        onChangeText={setDescription}
      />
      {errors.description && <Text>{errors.description}</Text>}
      <TextInput placeholder="Logo" value={logo} onChangeText={setLogo} />
      {errors.logo && <Text>{errors.logo}</Text>}
      <TextInput
        placeholder="Fecha de Liberación (YYYY-MM-DD)"
        value={releaseDate}
        onChangeText={setReleaseDate}
      />
      {errors.releaseDate && <Text>{errors.releaseDate}</Text>}
      <TextInput
        placeholder="Fecha de Revisión (YYYY-MM-DD)"
        value={reviewDate}
        onChangeText={setReviewDate}
      />
      {errors.reviewDate && <Text>{errors.reviewDate}</Text>}
      <Button title="Agregar" onPress={handleAddProduct} />
      <Button
        title="Reiniciar"
        onPress={() => {
          setName('');
          setDescription('');
          setLogo('');
          setReleaseDate('');
          setReviewDate('');
          setErrors({});
        }}
      />
    </View>
  );
};

export default AddProductScreen;
