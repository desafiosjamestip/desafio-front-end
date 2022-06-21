import { useState } from 'react';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css';
import { useProduct } from '../../providers/Product';

const Modal = () => {

  const { visible, changeModalVisibility } = useProduct()

    return (
        <Rodal visible={visible} onClose={() => changeModalVisibility(false)}>
          <h3>Configuração do produto</h3>

          <form>
            
          </form>
        </Rodal>
    )
}

export default Modal;