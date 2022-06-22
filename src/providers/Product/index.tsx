import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { v4 as uuid } from 'uuid';

import Product from "../../types/product";

interface ProviderProps {
    children: ReactNode;
}

interface ProductData {
    productList: Product[];
    visible: boolean;
    modalType: string;
    initialState: Product;
    productState: Product;

    changeModalVisibility: (boolean: boolean, type?: string) => void;
    setModalType: React.Dispatch<React.SetStateAction<string>>;
    createNewProduct: (newProduct: Product) => void;
    editProduct: (newProduct: Product) => void;
    deleteProduct: (deletedProduct: Product) => void;
    randomID: Function;
    setProductState: React.Dispatch<React.SetStateAction<Product>>;
}

const ProductContext = createContext<ProductData>({} as ProductData);

export const ProductProvider = ({ children }: ProviderProps) => {

    useEffect(() => {
        const localStorageProducts = localStorage.getItem("products");
        if (localStorageProducts) {
            const productsJSON = JSON.parse(localStorageProducts)
            setProductList(productsJSON)
        }
    }, [])

    const [productList, setProductList] = useState<Product[]>([]);
    const [visible, setVisible] = useState<boolean>(false)
    const [modalType, setModalType] = useState<string>("add")

    useEffect(() => {
        if (productList.length !== 0) {
            localStorage.setItem("products", JSON.stringify(productList));
        }
    }, [productList]);

    const changeModalVisibility = (boolean: boolean, type?: string) => {
        if (type) {
            setModalType(type)
        }
        return setVisible(boolean)
    }

    const createNewProduct = (newProduct: Product) => {
        setProductList([...productList, newProduct])
    }

    const editProduct = (editedProduct: Product) => {
        const OtherProducts = productList.filter((product) => product.id !== editedProduct.id)
        setProductList([...OtherProducts, editedProduct])
    }

    const deleteProduct = (deletedProduct: Product) => {
        const AllProducts = productList.filter((product) => product.id !== deletedProduct.id)
        setProductList(AllProducts)
    }

    const randomID = () => {
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 8)
        return small_id
    }

    const initialState = {
        name: "",
        provider: "",
        category: "",
        price: 0,
        id: randomID(),
    };


    const [productState, setProductState] = useState<Product>(initialState)

    return (
        <ProductContext.Provider
            value={{
                productList,
                createNewProduct,
                editProduct,
                deleteProduct,
                visible,
                modalType,
                setModalType,
                changeModalVisibility,
                randomID,
                initialState,
                productState,
                setProductState
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
export const useProduct = () => useContext(ProductContext);