import PropTypes from 'prop-types'

import { createContext, useContext, useReducer } from 'react'
import productReducer from '../reducers/productReducer'

const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    alertType: 'success',
  }

  const [state, dispatch] = useReducer(productReducer, initialState)

  function handleAddProduct(product) {
    dispatch({ type: 'ADD_PRODUCT', payload: product })
  }

  function handleRemoveProduct(code) {
    dispatch({ type: 'REMOVE_PRODUCT', payload: code })
  }

  return (
    <ProductContext.Provider value={{
      state,
      handleAddProduct,
      handleRemoveProduct,
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
