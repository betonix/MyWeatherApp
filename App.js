import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/screens/Home/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};

export default App;
