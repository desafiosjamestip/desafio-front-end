import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getLocalProducts } from '../util/services';
import MyContext from './MyContext';

export function MyProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [currentProductEdit, setCurrentProductEdit] = useState({});
  const notify = (message, type) => type ? toast.error(message) : toast(message);

  useEffect(() => {
    if(getLocalProducts !== null) {
      setProducts([...getLocalProducts]);
    }
  }, [setProducts])

  function getNewProduct(newProduct) {
    setProducts([...products, newProduct]);
  }

  function editProduct() {
    const findIndex = products
      .findIndex(({ code }) => code === currentProductEdit.code);
    
    let newList = [...products];

    newList.splice(findIndex, 1, currentProductEdit);
    
    localStorage.setItem('listProducts', JSON.stringify(newList));
    setProducts(newList);
    setIsOpen(false);
  }

  const reveal = {
    products,
    getNewProduct,
    modalIsOpen,
    setProducts,
    currentProductEdit,
    setCurrentProductEdit,
    setIsOpen,
    notify,
    editProduct
  }

  return(
  <MyContext.Provider value={ reveal }>
    { children }
  </MyContext.Provider>
  );

}