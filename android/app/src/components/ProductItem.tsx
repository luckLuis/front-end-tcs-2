import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface ProductItemProps {
  product: {
    id: string;
    name: string;
    description: string;
    logo: string;
    date_release: string;
    date_revision: string;
  };
  onPress: () => void;
}

const ProductItem: React.FC<ProductItemProps> = ({ product, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default ProductItem;
