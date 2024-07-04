import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [query, setQuery] = React.useState('');

  return (
    <View style={styles.container}>
      <SearchBar query={query} setQuery={setQuery} />
      <ProductList query={query} />
      <Button title="Agregar Producto" onPress={() => navigation.navigate('AddProduct')} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
