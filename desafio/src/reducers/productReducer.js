/* eslint-disable no-case-declarations */
const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] }
    case 'REMOVE_PRODUCT':
      const newItems = state.products.filter((product) => product.code !== action.payload)
      return { ...state, products: newItems }
    default:
      return state
  }
}

export default productReducer
