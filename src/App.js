import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SupplierList from './components/SupplierList';
import SupplierForm from './components/SupplierForm';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SupplierList">
        <Stack.Screen name="SupplierList" component={SupplierList} options={{ title: 'Lista de Fornecedores' }} />
        <Stack.Screen name="SupplierForm" component={SupplierForm} options={{ title: 'Cadastro de Fornecedor' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;