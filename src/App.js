import React from 'react';
import { StyleSheet, View } from 'react-native';
import CatStyle from './components/CatStyle';
import CatList from './components/CatList';
import CatImage from './components/CatImage';

const App = () => {
  return (
    <View style={styles.container}>
      <CatStyle name="Maru" />
      <CatList names={['Maru', 'Jellylorum', 'Spot']} />
      <CatImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;