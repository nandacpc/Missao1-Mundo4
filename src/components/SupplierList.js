import React, { useState, useEffect } from 'react';
import { View, FlatList, TextInput, StyleSheet, Text } from 'react-native';
import SupplierListItem from './SupplierListItem';
import { getSuppliers } from './fakeDatabase';

const SupplierList = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [filteredSuppliers, setFilteredSuppliers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    getSuppliers().then(data => {
      setSuppliers(data);
      setFilteredSuppliers(data);
    });
  }, []);

  // Função para filtrar fornecedores com base na pesquisa
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredSuppliers(suppliers);
    } else {
      const filteredData = suppliers.filter(supplier =>
        supplier.name.toLowerCase().includes(query.toLowerCase()) ||
        supplier.address.toLowerCase().includes(query.toLowerCase()) ||
        supplier.categories.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredSuppliers(filteredData);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar fornecedores..."
        value={searchQuery}
        onChangeText={handleSearch}
        style={styles.searchInput}
      />
      <FlatList
        data={filteredSuppliers}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <SupplierListItem supplier={item} />}
        ListEmptyComponent={<Text>Nenhum fornecedor encontrado.</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
  },
});

export default SupplierList;