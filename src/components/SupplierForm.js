import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert, Image, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import placeholderImage from './assets/images/anonymous_avatars.jpg';
import { addSupplier } from '../fakeDatabase';

const SupplierForm = ({ onSubmit }) => {
  const [supplier, setSupplier] = useState({
    name: '',
    address: '',
    contact: '',
    categories: '',
    imageUrl: '',
  });

  // Função para atualizar os campos do fornecedor
  const updateField = (key, value) => {
    setSupplier({ ...supplier, [key]: value });
  };

  // Função para lidar com a seleção de imagem
  const handleImageSelection = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (permissionResult.granted === false) {
      Alert.alert("Você recusou a permissão de acessar a galeria.");
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync();
    
    if (pickerResult.cancelled === true) {
      return;
    }

    updateField('imageUrl', pickerResult.uri);
  };

  // Função para lidar com a submissão do formulário
  const handleSubmit = () => {

    if (!supplier.name || !supplier.address || !supplier.contact || !supplier.categories) {
      Alert.alert("Por favor, preencha todos os campos.");
      return;
    }

    onSubmit(supplier);
    Alert.alert("Fornecedor cadastrado com sucesso!");

    addSupplier(supplier)
    .then(supplierWithId => {
      Alert.alert('Sucesso', `Fornecedor ${supplierWithId.name} cadastrado com sucesso!`);
    })
    .catch(error => {
      Alert.alert('Erro', 'Não foi possível cadastrar o fornecedor.');    
    });

    setSupplier({
      name: '',
      address: '',
      contact: '',
      categories: '',
      imageUrl: '',
    });
  };

  return (
    <View style={styles.formContainer}>
      <TextInput
        placeholder="Nome do Fornecedor"
        value={supplier.name}
        onChangeText={(text) => updateField('name', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Endereço"
        value={supplier.address}
        onChangeText={(text) => updateField('address', text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Contato"
        value={supplier.contact}
        onChangeText={(text) => updateField('contact', text)}
        keyboardType="phone-pad"
        style={styles.input}
      />
      <TextInput
        placeholder="Categorias"
        value={supplier.categories}
        onChangeText={(text) => updateField('categories', text)}
        style={styles.input}
      />
      <TouchableOpacity style={styles.imagePicker} onPress={handleImageSelection}>
        <Image
          source={supplier.imageUrl ? { uri: supplier.imageUrl } : placeholderImage}
          style={styles.image}
        />
      </TouchableOpacity>
      <Button title="Cadastrar Fornecedor" onPress={() => handleSubmit(supplier)} />
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  imagePicker: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    backgroundColor: '#e1e4e8',
  },
});

export default SupplierForm;
