import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import placeholderImage from './assets/images/anonymous_avatars.jpg';

const SupplierListItem = ({ supplier }) => {
  return (
    <View style={styles.container}>
      <Image
        source={supplier.imageUrl ? { uri: supplier.imageUrl } : placeholderImage}     style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{supplier.name}</Text>
        <Text style={styles.detail}>Endereço: {supplier.address}</Text>
        <Text style={styles.detail}>Contato: {supplier.contact}</Text>
        <Text style={styles.detail}>Categorias: {supplier.categories}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  name: {
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 12,
  },
});

export default SupplierListItem;
