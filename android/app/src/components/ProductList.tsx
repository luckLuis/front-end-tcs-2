import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Product } from '../types';
import { getProducts } from '../services/api';

interface Props {
  query: string;
}

const ProductList: React.FC<Props> = ({ query }) => {
  const navigation = useNavigation();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response: Product[] = await getProducts();
      if (response) {
        setProducts(response);
        setTotalResults(response.length);
      } else {
        console.error('La respuesta de la API no tiene el formato esperado:', response);
      }
    } catch (error) {
      console.error('Error al obtener productos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim() === '') {
      setTotalResults(products.length);
      return;
    }

    const filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setTotalResults(filteredProducts.length);
    setProducts(filteredProducts);
  }, [query]);

  if (loading) {
    return <Text>Cargando...</Text>;
  }

  const handleNavigateToProductItem = (productId: string) => {
    console.log('Navegar a detalles del producto con ID:', productId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.totalResults}>Total de Resultados: {totalResults}</Text>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleNavigateToProductItem(item.id)}>
            <View style={styles.itemContent}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productId}>ID: {item.id}</Text>
              <Text style={styles.productDescription}>{item.description}</Text>
            </View>
            <View style={styles.arrowContainer}>
              <View style={styles.arrow} />
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  totalResults: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemContent: {
    flex: 1,
  },
  productName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  productId: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  productDescription: {
    color: '#888',
    fontSize: 14,
  },
  arrowContainer: {
    width: 30,
    alignItems: 'flex-end',
  },
  arrow: {
    width: 0,
    height: 0,
    borderTopWidth: 5,
    borderBottomWidth: 5,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightWidth: 8,
    borderRightColor: '#666',
    transform: [{ rotate: '45deg' }],
  },
});

export default ProductList;
