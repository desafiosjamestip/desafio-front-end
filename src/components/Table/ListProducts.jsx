import React, { useContext } from 'react';
import { ContainerList } from './styles';
import MyContext from '../../context/MyContext';
import { FiEdit3 } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";

export default function ListProducts() {
  const { products, setProducts, setIsOpen, setCurrentProductEdit } = useContext(MyContext);

  function deleteProduct(product) {
    const newListProducts = products.filter((newList) => newList.code !== product.code)
    localStorage.setItem('listProducts', JSON.stringify(newListProducts));
    setProducts(newListProducts);
  }

  function openModal(product) {
    setIsOpen(true);
    setCurrentProductEdit(product)
  }

  return (
    <ContainerList>
      { products && products.map((product, i) => (
        <div key={i} className="div-list">
          <p>{ product.code }</p>
          <p>{ product.category }</p>
          <p>{ product.name }</p>
          <p>{ product.providerName }</p>
          <p>{ Number(product.value).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}) }</p>
          <p><FiEdit3 onClick={ () => openModal(product) } data-testid="edit-btn" /></p>
          <p>
            <BiTrash
              onClick={ () => deleteProduct(product) }
              data-testid="delete-btn" />
          </p>
        </div>
      )) }
    </ContainerList>
  );
}
