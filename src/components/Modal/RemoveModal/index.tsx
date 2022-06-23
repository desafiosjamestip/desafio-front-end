import { ButtonContainer, Title } from './styled';

import Rodal from 'rodal';
import 'rodal/lib/rodal.css';

import { useProduct } from '../../../providers/Product';

import Button from '../../Button';

const RemoveModal = () => {

  const { visible, changeModalVisibility, productState, deleteProduct, windowWidth } = useProduct()

  const removeProduct = () => {
    deleteProduct(productState)

    changeModalVisibility(false)

  }

  return (
    <Rodal
      visible={visible}
      onClose={() => changeModalVisibility(false)}
      width={windowWidth()}
      height={270}
    >
      <Title>Remover produto da lista?</Title>
      <ButtonContainer>
        <Button onClick={() => removeProduct()}>Remover</Button>
        <Button onClick={() => changeModalVisibility(false)}>Cancelar</Button>
      </ButtonContainer>
    </Rodal>
  )
}

export default RemoveModal;