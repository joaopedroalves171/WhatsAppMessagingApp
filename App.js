import React from 'react';
import { View, StyleSheet } from 'react-native';
import Parentpai from './component';

const App = () => {
  return (
    <View style={styles.container}>
      <Parentpai />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;