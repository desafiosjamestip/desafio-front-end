import React, { useContext, useState } from 'react'
import LabelTemplate from './LabelTemplate';
import categories from '../../util/services';
import { ToastContainer } from 'react-toastify';
import MyContext from '../../context/MyContext';
import { v4 as uuid } from 'uuid';
import { Buttons } from '../../GlobalStyles';
import BtnAddNewProduct from '../Dashboard/BtnAddNewProduct';

export default function FormNewProduct() {
  const valuesInputs = {
    code: uuid(),
    category: 'Acessórios de Tecnologia',
    name: '',
    providerName: '',
    value: 0,
  }

  const { 
    getNewProduct,
    notify,
    setCurrentProductEdit,
    currentProductEdit,
    modalIsOpen,
    editProduct
  } = useContext(MyContext);

  const [newProduct, setNewProduct] = useState(valuesInputs);

  function handleProductValue(event) {
    const { value, name } = event.target;
    if(modalIsOpen) {
      setCurrentProductEdit({...currentProductEdit, [name]: value});
      return;
    }
    setNewProduct({...newProduct, [name]: value});
  }

  function submitNewProduct() {
    if(newProduct.name === '' || newProduct.providerName === '') {
      return notify('Preencha todos os campos!', true);
    };

    const getProductsLocal = JSON.parse(localStorage.getItem('listProducts'));
  
    localStorage.setItem('listProducts', JSON
      .stringify([...getProductsLocal, newProduct]));

    getNewProduct(newProduct);

    setNewProduct(valuesInputs);
  }

  return (
    <>
      { !modalIsOpen && <BtnAddNewProduct /> }
      <ToastContainer />
      <form>
        <LabelTemplate
          type="text"
          title="Categoria do Produto"
          name="category"
          value={ modalIsOpen ? 
            currentProductEdit.category : newProduct.category   }
          onChange={ handleProductValue }
          array={ categories }
        />
        <LabelTemplate
          type="text"
          title="Nome do Produto"
          name="name"
          value={ modalIsOpen ? 
            currentProductEdit.name : newProduct.name }
          onChange={ handleProductValue }
          array={ false }
        />
        <LabelTemplate
          type="text"
          title="Nome do Fornecedor"
          name="providerName"
          value={ modalIsOpen ? currentProductEdit.providerName
            : newProduct.providerName }
          onChange={ handleProductValue }
          array={ false }
        />
        <LabelTemplate
          type="number"
          title="Valor do Produto"
          name="value"
          value={ modalIsOpen ? currentProductEdit.value 
            : newProduct.value }
          onChange={ handleProductValue }
          array={ false }
        />
        <Buttons type="button"
          onClick={ modalIsOpen ?  editProduct : submitNewProduct }
          data-testid="enviar"
        >
          { modalIsOpen ? 'Editar' : 'Enviar' }
        </Buttons>
      </form>
    </>
  )
}
