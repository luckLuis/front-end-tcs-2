import React from 'react';
import {FlatList} from 'react-native';
import ProductItem from './ProductItem';
import {Product} from '../types';

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({products}) => {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => <ProductItem product={item} />}
      keyExtractor={item => item.id.toString()}
    />
  );
};

export default ProductList;
