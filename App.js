import React from 'react';
import { View, StyleSheet } from 'react-native';
import Parentcomponente from './component';

const App = () => {
  return (
    <View style={styles.container}>
      <Parentcomponente />
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
