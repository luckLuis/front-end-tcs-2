import React from 'react';
import {View, Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList, Product} from '../types';
import {StackNavigationProp} from '@react-navigation/stack';

type ProductDetailsRouteProp = RouteProp<RootStackParamList, 'ProductDetails'>;
type ProductDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  'ProductDetails'
>;

type Props = {
  route: ProductDetailsRouteProp;
  navigation: ProductDetailsNavigationProp;
};

const ProductDetails: React.FC<Props> = ({route}) => {
  const {product} = route.params;

  return (
    <View>
      <Text>Id: {product.id}</Text>
      <Text>Nombre: {product.name}</Text>
      <Text>Descripción: {product.description}</Text>
      <Text>Logo: {product.logo}</Text>
      <Text>Fecha de Liberación: {product.releaseDate.toISOString()}</Text>
      <Text>Fecha de Revisión: {product.reviewDate.toISOString()}</Text>
    </View>
  );
};

export default ProductDetails;
