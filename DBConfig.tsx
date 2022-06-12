export const DBConfig = {
    name: 'MyDB',
    version: 1,
    objectStoresMeta: [
      {
        store: 'product',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { cod: 'codigo', category: 'category', nameProduct: 'nameProduct', nameProvider: 'nameProvider', price: 'price' }
        ]
      }
    ]
  };