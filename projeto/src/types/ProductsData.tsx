/*
interface dos dados enviados para função que faz a requisição de cadastro de produto
*/
export interface ProductsData {
  name: string;
  category: string;
  price: number;
  provider: string;
  id: number;
}
