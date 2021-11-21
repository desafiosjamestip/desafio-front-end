import PropTypes from 'prop-types'
import { useEffect } from 'react'

import { Wrapper } from './styles'

import error from '../../assets/styles/images/error.svg'
import successIcon from '../../assets/styles/images/success.svg'
import { useProduct } from '../../contexts/ProductContext'

export default function Alert({ message, success, display }) {
  const { alert, handleDisplayAlert } = useProduct()

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleDisplayAlert({ message: '', succes: false, display: false })
    }, 3000)

    return () => clearTimeout(timeout)
  }, [alert])

  return (
    <Wrapper display={display} success={success}>
      <img src={success ? successIcon : error} alt="Error" />
      <span>
        {message}
      </span>
      <button
        type="button"
        onClick={() => handleDisplayAlert({ success: false, display: false })}
      >
        <span>X</span>
      </button>
    </Wrapper>
  )
}

Alert.propTypes = {
  message: PropTypes.string.isRequired,
  success: PropTypes.bool.isRequired,
  display: PropTypes.bool.isRequired,
}
