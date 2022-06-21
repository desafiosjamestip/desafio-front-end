import { Form, Title } from './styled';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { useProduct } from '../../providers/Product';

import Button from '../Button';
import { useState } from 'react';


const Modal = () => {

  const { visible, changeModalVisibility, createNewProduct } = useProduct()

  const [productName, setProductName] = useState<string>("")
  const [productProvider, setProductProvider] = useState<string>("")
  const [productCategory, setProductCategory] = useState<string>("")
  const [productPrice, setProductPrice] = useState<number>(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const product = {
      name: productName,
      provider: productProvider,
      category: productCategory,
      price: productPrice,
      id: 12,
    }

    createNewProduct(product)
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
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">
            Nome do fornecedor
          </label>
          <input
            type="text"
            value={productProvider}
            onChange={(e) => setProductProvider(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">
            Categoria
          </label>
          <input
            type="text"
            value={productCategory}
            onChange={(e) => setProductCategory(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">
            Valor do produto
          </label>
          <input
            type="number"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.valueAsNumber)}
          />
        </div>
        <Button confirm>Confirmar</Button>

      </Form>
    </Rodal>
  )
}

export default Modal;