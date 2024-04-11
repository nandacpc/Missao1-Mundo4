import React from 'react';
import { Text, TextInput, View } from 'react-native';

const CatStyle = ({ name }) => {

  return (
    <View>
      <Text>Hello, I am {name}!</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="Name me!"
      />
    </View>
  );
};

export default CatStyle;
