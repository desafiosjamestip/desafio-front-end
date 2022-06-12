import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { toast } from "react-toastify";
import {
  IProduct,
  IProductsProviderProps,
  IProductsProviderData,
} from "../@types";

const ProductsContext = createContext<IProductsProviderData>(
  {} as IProductsProviderData
);

const useProducts = () => {
  const context = useContext(ProductsContext);

  return context;
};

const ProductsProvider = ({ children }: IProductsProviderProps) => {
  const productStorage = JSON.parse(localStorage.getItem("@Products") || "[]");
  const [productList, setProductList] = useState<IProduct[]>(productStorage);
  const [code, setProductCode] = useState("");
  const [category, setProductCategory] = useState("");
  const [name, setProductName] = useState("");
  const [suplierName, setProductSuplier] = useState("");
  const [price, setProductPrice] = useState(0);
  const [newProduct, setNewProduct] = useState({} as IProduct);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct>();

  const createNewProduct = useCallback(
    (product: IProduct) => {
      const codeVerification = productList.filter(
        (item) => item.code === product.code
      );

      if (codeVerification.length > 0) {
        toast.error("Já existe um produto com esse código");
      } else {
        setProductList([...productList, product]);
        setNewProduct(product);
        localStorage.setItem(
          "@Products",
          JSON.stringify([...productList, product])
        );
        toast.success("Produto cadastrado com sucesso", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    },
    [productList]
  );

  const deleteProduct = useCallback(
    (product: IProduct) => {
      const newProductList = productList.filter(
        (item) => item.code !== product.code
      );
      setProductList(newProductList);
      localStorage.setItem("@Products", JSON.stringify(newProductList));
      toast.success("Produto deletado com sucesso", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    },
    [productList]
  );

  const updateProduct = useCallback(
    (product: IProduct) => {
      const updatedList = productList.map((item) => {
        console.log(item.code);
        console.log(product.code);
        if (item.code === product.code) {
          const updatedItem = {
            ...item,
            category: product.category || item.category,
            name: product.name || item.name,
            suplierName: product.suplierName || item.suplierName,
            price: product.price ?? item.price,
          };
          return updatedItem;
        }

        return item;
      });
      console.log(updatedList);
      localStorage.setItem("@Products", JSON.stringify(updatedList));
      setProductList(updatedList);
    },
    [productList]
  );
  const value = useMemo(
    () => ({
      productList,
      newProduct,
      openModal,
      code,
      category,
      name,
      suplierName,
      price,
      setProductCode,
      setProductCategory,
      setProductName,
      setProductSuplier,
      setProductPrice,
      setOpenModal,
      createNewProduct,
      deleteProduct,
      updateProduct,
      selectedProduct,
      setSelectedProduct,
    }),
    [
      productList,
      newProduct,
      openModal,
      code,
      category,
      name,
      suplierName,
      price,
      setProductCode,
      setProductCategory,
      setProductName,
      setProductSuplier,
      setProductPrice,
      setOpenModal,
      createNewProduct,
      deleteProduct,
      updateProduct,
      selectedProduct,
      setSelectedProduct,
    ]
  );
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};

export { ProductsProvider, useProducts };
