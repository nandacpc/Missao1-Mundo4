import React from 'react';
import { Text, View, Image } from 'react-native';


const CatImage = () => {

  return (
    <View>
      <Image
        source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png' }}
        style={{ width: 200, height: 200 }}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
};
 

export default CatImage;
