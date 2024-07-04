// HomeScreen.tsx

import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import {getFinancialProducts} from '../services/api';
import {Product} from '../types';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../types';

type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  route: HomeScreenRouteProp;
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({navigation, route}) => {
  const {authorId} = route.params;

  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      if (!authorId) {
        throw new Error('AuthorId is not defined');
      }
      const data = await getFinancialProducts(authorId);
      setProducts(data);
      filterProducts(data, searchTerm);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSearch = (text: string) => {
    setSearchTerm(text);
    filterProducts(products, text);
  };

  const filterProducts = (productsToFilter: Product[], searchTerm: string) => {
    const filtered = productsToFilter.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredProducts(filtered);
  };

  return (
    <View>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
      <Button
        title="Agregar Producto"
        onPress={() => navigation.navigate('AddProduct')}
      />
    </View>
  );
};

export default HomeScreen;
