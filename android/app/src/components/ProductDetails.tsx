import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ProductDetails = ({ route }: { route: any }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.logo }} style={styles.logo} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.date}>Fecha de Liberación: <Text style={styles.dateValue}>{product.date_release}</Text></Text>
      <Text style={styles.date}>Fecha de Revisión: <Text style={styles.dateValue}>{product.date_revision}</Text></Text>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  date: {
    fontSize: 14,
    marginTop: 5,
  },
  dateValue: {
    fontWeight: 'bold',
  },
});
