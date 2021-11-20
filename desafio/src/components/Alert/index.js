import PropTypes from 'prop-types'

import { Wrapper } from './styles'

import error from '../../assets/styles/images/error.svg'
import successIcon from '../../assets/styles/images/success.svg'

export default function Alert({ success, display }) {
  return (
    <Wrapper display={display} success={success}>
      <img src={success ? successIcon : error} alt="Error" />
      <span>
        {success
          ? 'O produto foi adicionado com sucesso!'
          : 'O produto foi excluído com sucesso!'}
      </span>
      <button type="button"><span>X</span></button>
    </Wrapper>
  )
}

Alert.propTypes = {
  success: PropTypes.bool.isRequired,
  display: PropTypes.bool.isRequired,
}
