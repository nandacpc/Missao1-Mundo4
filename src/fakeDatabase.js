let fakeDatabase = [];

export const addSupplier = (newSupplier) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const newId = fakeDatabase.length + 1;
        const supplierWithId = { ...newSupplier, id: newId };
        fakeDatabase.push(supplierWithId);
        resolve(supplierWithId);
      } catch (error) {
        reject(error);
      }
    }, 500); // Simulação de atraso
  });
};

export const getSuppliers = () => {
  return Promise.resolve(fakeDatabase);
};
