import { Form, Title } from './styled';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { useProduct } from '../../providers/Product';

import Button from '../Button';
import { useState } from 'react';
import Product from '../../types/product';


const Modal = () => {

  const { visible, changeModalVisibility, createNewProduct } = useProduct()

  const initialState = {
    name: "",
    provider: "",
    category: "",
    price: 0,
    id: "12",
  };

  const [newProduct, setNewProduct] = useState<Product>(initialState);

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
      const name = event.target.name;
      const value = event.target.value;
      setNewProduct({ ...newProduct, [name]: value });
    }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    createNewProduct(newProduct)

    setNewProduct(initialState)

    changeModalVisibility(false)
  }

  return (
    <Rodal
      visible={visible}
      onClose={() => changeModalVisibility(false)}
      width={600}
      height={470}
    >
      <Title>Configuração do produto</Title>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="">
            Nome do produto
          </label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="">
            Nome do fornecedor
          </label>
          <input
            type="text"
            name="provider"
            value={newProduct.provider}
            onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="">
            Categoria
          </label>
          <input
            type="text"
            name="category"
            value={newProduct.category}
            onChange={handleChange}
            />
        </div>
        <div>
          <label htmlFor="">
            Valor do produto
          </label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            />
        </div>
        <Button confirm>Confirmar</Button>

      </Form>
    </Rodal>
  )
}

export default Modal;