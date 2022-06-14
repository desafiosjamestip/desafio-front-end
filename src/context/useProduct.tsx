import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useRef,
} from 'react';
import { toast } from 'react-toastify';
import { Product } from '../models/Product';

interface ProductProviderProps {
  children: ReactNode;
}

interface UserProductContextData {
  products: Product[];
  addProduct: (createProduct: Product) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProduct: (productUpdate: Product) => void;
}

const UserProductContext = createContext<UserProductContextData>(
  {} as UserProductContextData
);

export function ProductProvider({
  children,
}: ProductProviderProps): JSX.Element {
  const [products, setProducts] = useState<Product[]>(() => {
    const storagedProduct = localStorage.getItem('@testDev:product');

    if (storagedProduct) {
      return JSON.parse(storagedProduct);
    }

    return [];
  });

  const prevProductsRef = useRef<Product[]>();
  useEffect(() => {
    prevProductsRef.current = products;
  });
  const productsPreviousValue = prevProductsRef.current ?? products;

  useEffect(() => {
    if (productsPreviousValue !== products) {
      localStorage.setItem('@testDev:product', JSON.stringify(products));
    }
  }, [products, productsPreviousValue]);

  const addProduct = async (createProduct: Product) => {
    console.log(createProduct);
    try {
      const updateProduct = [...products];

      const productExists = updateProduct.find(
        (product) => product.id === createProduct.id
      );

      if (!productExists) {
        await updateProduct.push(createProduct);
        setProducts(updateProduct);
      }
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const removeCart = [...products];

      const removeProductId = removeCart.findIndex(
        (product) => product.id === productId
      );

      if (removeProductId >= 0) {
        removeCart.splice(removeProductId, 1);
        setProducts(removeCart);
      } else {
        throw Error();
      }
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProduct = async (productUpdate: Product) => {
    console.log(productUpdate);
    try {
      const updateData = [...products];

      const productExists = updateData.find(
        (product) => product.id === productUpdate.id
      );

      if (productExists) {
        (productExists.name = productUpdate?.name),
          (productExists.code = productUpdate?.code),
          (productExists.price = productUpdate?.price),
          (productExists.category = productUpdate?.category);

        setProducts(updateData);
      } else {
        throw Error();
      }
      console.log(updateData);
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <UserProductContext.Provider
      value={{ products, addProduct, removeProduct, updateProduct }}
    >
      {children}
    </UserProductContext.Provider>
  );
}

export function useProduct(): UserProductContextData {
  const context = useContext(UserProductContext);

  return context;
}
