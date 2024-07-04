import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './android/app/src/screens/HomeScreen';
import SearchBar  from './android/app/src/components/SearchBar';

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen navigation={{}} /> 

    </NavigationContainer>
  );
};

export default App;
