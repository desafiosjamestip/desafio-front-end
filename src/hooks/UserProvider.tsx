import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IProduct } from '../interfaces/Product.interfaces';
import { api } from '../server/api';

interface UserContextProps {
  products?: Array<IProduct>;
  addProduct: (data: IProduct) => void;
  removeProduct: (productId: string) => void;
  editProduct: (data: IProduct) => void;
}
interface UserProviderProps {
  children: ReactNode;
}
const UserContext = createContext<UserContextProps>({} as UserContextProps);

const UserProvider = ({ children }: UserProviderProps) => {
  const [data, setData] = useState<IProduct>();
  const [products, setProducts] = useState<IProduct[]>(() => {
    const storageProduct = localStorage.getItem('productsTotal');

    if (storageProduct) {
      return JSON.parse(storageProduct);
    }
    return [];
  });
  const prevProductRef = useRef<IProduct[]>();

  useEffect(() => {
    prevProductRef.current = products;
  });
  const productsPreviousValue = prevProductRef.current ?? products;

  useEffect(() => {
    if (productsPreviousValue !== products) {
      localStorage.setItem('productsTotal', JSON.stringify(products));
    }
  }, [products, productsPreviousValue]);

  const addProduct = async (data: IProduct) => {
    await api.post('/products', data);
    await api.get('/products').then((response) => {
      setData(response.data);
    });
  };
  const removeProduct = async (productId: string) => {
    const productsList = [...products];

    const removeProductId = await productsList.findIndex(
      (product) => product.id === productId
    );

    if (removeProductId >= 0) {
      productsList.splice(removeProductId, 1);
      setProducts(productsList);
    } else {
      throw Error();
    }
  };
  const editProduct = async (data: IProduct) => {
    const updateProduct = [...products];
    const productExists = updateProduct.find(
      (product) => product.id === data.id
    );
    if (productExists) {
      (productExists.name = data?.name),
        (productExists.code = data?.code),
        (productExists.price = data?.price),
        (productExists.category = data?.category);
      setProducts(updateProduct);
      console.log(productExists);
    } else {
      throw Error();
    }
    console.log(productExists);
  };
  return (
    <UserContext.Provider
      value={{ products, addProduct, removeProduct, editProduct }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useProduct = () => {
  const context = useContext(UserContext);
  return context;
};

export { UserContext, UserProvider, useProduct };
