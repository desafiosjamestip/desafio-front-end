import { Form, Title } from './styled';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { useProduct } from '../../../providers/Product';

import Button from '../../Button';

const EditModal = () => {

  const { visible, changeModalVisibility, editProduct, productState, setProductState } = useProduct()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setProductState({ ...productState, [name]: value });
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    editProduct(productState)
    
    changeModalVisibility(false)
  }

  return (
    <Rodal
      visible={visible}
      onClose={() => changeModalVisibility(false)}
      width={600}
      height={470}
    >
      <Title>Edição do produto</Title>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label htmlFor="">
            Nome do produto
          </label>
          <input
            type="text"
            name="name"
            required
            value={productState.name}
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
            value={productState.provider}
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
            value={productState.category}
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
            value={productState.price}
            onChange={handleChange}
          />
        </div>
        <Button confirm>Confirmar</Button>

      </Form>
    </Rodal>
  )
}

export default EditModal;