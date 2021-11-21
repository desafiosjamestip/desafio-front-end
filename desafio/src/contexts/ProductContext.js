import PropTypes from 'prop-types'

import { createContext, useContext, useReducer } from 'react'
import productReducer from '../reducers/productReducer'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    alert: {
      message: '',
      success: false,
      display: false,
    },
  }

  const [state, dispatch] = useReducer(productReducer, initialState)

  function handleAddProduct(product) {
    dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  function handleRemoveProduct(code) {
    dispatch({ type: 'REMOVE_PRODUCT', payload: code })
  }

  function handleDisplayAlert(alert) {
    dispatch({ type: 'DISPLAY_ALERT', payload: alert })
  }

  return (
    <ProductContext.Provider value={{
      state,
      handleAddProduct,
      handleRemoveProduct,
      handleDisplayAlert,
    }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProduct = () => useContext(ProductContext)

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
