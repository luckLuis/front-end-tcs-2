import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Product} from '../types';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({product}) => {
  return (
    <TouchableOpacity>
      <View>
        <Text>{product.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
