import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [query, setQuery] = React.useState('');

  console.log('Query:', query);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>BANCO</Text>
      </View>

      <SearchBar query={query} setQuery={setQuery} />
      <ProductList query={query} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('AddProduct')}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    backgroundColor: '#f0f0f0',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 50,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: 'blue',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
