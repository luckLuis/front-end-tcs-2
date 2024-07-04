import React from 'react';
import {TextInput, View} from 'react-native';

interface SearchBarProps {
  onSearch: (text: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({onSearch}) => {
  return (
    <View>
      <TextInput placeholder="Buscar productos" onChangeText={onSearch} />
    </View>
  );
};

export default SearchBar;
