import { Form, Title } from './styled';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { useProduct } from '../../../providers/Product';

import Button from '../../Button';
import { useState } from 'react';
import Product from '../../../types/product';


const AddModal = () => {

  const { visible, changeModalVisibility, createNewProduct, initialState, windowWidth } = useProduct()

  const [newProduct, setNewProduct] = useState<Product>(initialState);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      width={windowWidth()}
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
            required
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
            required
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
            required
            value={newProduct.price}
            onChange={handleChange}
          />
        </div>
        <Button confirm>Confirmar</Button>

      </Form>
    </Rodal>
  )
}

export default AddModal;