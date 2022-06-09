import { useContext } from 'react';
import ProductContext from '../context/ProductContext';

export function useProducts(){
  const value = useContext(ProductContext)
  return value;
}