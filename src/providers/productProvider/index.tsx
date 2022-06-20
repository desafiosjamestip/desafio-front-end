import {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import { IProduct } from "../../intefaces/product";
import { useToast } from "@chakra-ui/react";
interface ProductsProps {
  children: ReactNode;
}

interface ProductProviderData {
  products: Array<IProduct>;
  getAllProducts: () => void;
  postProduct: (product: IProduct) => void;
  updateProduct: (product: IProduct) => void;
  deleteProduct: (productCode: string) => void;
}

export const ProductsContext = createContext<ProductProviderData>(
  {} as ProductProviderData
);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  return context;
};

export function ProductsProvider({ children }: ProductsProps) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const toast = useToast();

  const getAllProducts = () => {
    const indexedDB = window.indexedDB;

    if (!indexedDB) {
      toast({
        title: "Erro na conexão com o banco de dados",
        description:
          "Tente novamente mais tarde ou tente abrir em outro navegador",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    const request = indexedDB.open("ProductsDatabase", 1);
    request.onerror = function (event) {
      console.error("An error ocurred with indexedDB");
      console.error(event);
    };

    request.onsuccess = function () {
      const db = request.result;

      const transaction = db.transaction("products", "readwrite");

      const store = transaction.objectStore("products");

      const products = store.getAll();

      products.onsuccess = function () {
        setProducts(products.result);
      };

      transaction.oncomplete = function () {
        db.close();
      };
    };
  };

  useEffect(() => {
    getAllProducts();
  });

  const postProduct = (product: IProduct) => {
    const productAlreadyExists = products.find(
      (oneProduct) => oneProduct.productCode === product.productCode
    );

    if (productAlreadyExists) {
      toast({
        title: "Esse produto já existe",
        description:
          "Se você deseja cadastrar dois produtos com o mesmo nome, ao menos troque o código do produto",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
      return "";
    }
    const indexedDB = window.indexedDB;

    if (!indexedDB) {
      toast({
        title: "Erro na conexão com o banco de dados",
        description:
          "Tente novamente mais tarde ou tente abrir em outro navegador",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    const request = indexedDB.open("ProductsDatabase", 1);
    request.onerror = function (event) {
      console.error("An error ocurred with indexedDB");
      console.error(event);
    };
    request.onupgradeneeded = function () {
      const db = request.result;
      const store = db.createObjectStore("products", {
        keyPath: "productCode",
      });
      store.createIndex("productName", ["name"], { unique: false });
      store.createIndex("productPrice", ["price"], { unique: false });
      store.createIndex("productCategory", ["category"], { unique: false });
      store.createIndex("productProvider", ["provider"], { unique: false });
    };

    request.onsuccess = function () {
      const db = request.result;

      const transaction = db.transaction("products", "readwrite");

      const store = transaction.objectStore("products");

      const getProductByCode = store.get(product.productCode);

      store.put(product);

      getProductByCode.onsuccess = function () {
        toast({
          title: "Produto Criado!",
          description: "Vá para a pagína de produtos para visualiza-lo.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        getAllProducts();
      };

      transaction.oncomplete = function () {
        db.close();
      };
    };
  };

  const updateProduct = (product: IProduct) => {
    const indexedDB = window.indexedDB;

    if (!indexedDB) {
      toast({
        title: "Erro na conexão com o banco de dados",
        description:
          "Tente novamente mais tarde ou tente abrir em outro navegador",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    const request = indexedDB.open("ProductsDatabase", 1);
    request.onerror = function (event) {
      console.error("An error ocurred with indexedDB");
      console.error(event);
    };
    request.onupgradeneeded = function () {
      const db = request.result;

      const store = db.createObjectStore("products", {
        keyPath: "productCode",
      });
      store.createIndex("productName", ["name"], { unique: false });
      store.createIndex("productPrice", ["price"], { unique: false });
      store.createIndex("productCategory", ["category"], { unique: false });
      store.createIndex("productProvider", ["provider"], { unique: false });
    };
    request.onsuccess = function () {
      const db = request.result;

      const transaction = db.transaction("products", "readwrite");

      const store = transaction.objectStore("products");

      const productToPut = store.get(product.productCode);
      productToPut.onsuccess = function () {
        productToPut.result.productName = product.productName;
        productToPut.result.productCategory = product.productCategory;
        productToPut.result.productPrice = product.productPrice;
        productToPut.result.productProvider = product.productProvider;
        store.put(productToPut.result);
        getAllProducts();
        toast({
          title: "Produto Editado!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      };

      transaction.oncomplete = function () {
        db.close();
      };
    };
  };

  const deleteProduct = (productCode: string) => {
    const indexedDB = window.indexedDB;

    if (!indexedDB) {
      toast({
        title: "Erro na conexão com o banco de dados",
        description:
          "Tente novamente mais tarde ou tente abrir em outro navegador",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }

    const request = indexedDB.open("ProductsDatabase", 1);
    request.onerror = function (event) {
      console.error("An error ocurred with indexedDB");
      console.error(event);
    };
    request.onupgradeneeded = function () {
      const db = request.result;

      const store = db.createObjectStore("products", {
        keyPath: "productCode",
      });
      store.createIndex("productName", ["name"], { unique: false });
      store.createIndex("productPrice", ["price"], { unique: false });
      store.createIndex("productCategory", ["category"], { unique: false });
      store.createIndex("productProvider", ["provider"], { unique: false });
    };
    request.onsuccess = function () {
      const db = request.result;

      const transaction = db.transaction("products", "readwrite");

      const store = transaction.objectStore("products");

      const productToPut = store.delete(productCode);
      productToPut.onsuccess = function () {
        getAllProducts();
        toast({
          title: "Produto deletado!",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      };
      transaction.oncomplete = function () {
        db.close();
      };
    };
  };
  return (
    <ProductsContext.Provider
      value={{
        products,
        getAllProducts,
        postProduct,
        updateProduct,
        deleteProduct,
      }}
    >
      {children},
    </ProductsContext.Provider>
  );
}
