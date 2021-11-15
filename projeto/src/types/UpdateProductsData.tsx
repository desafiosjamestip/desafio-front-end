/*
interface dos dados enviados para função que faz a requisição de update de produtos
*/
export interface UpdateProductsData {
  name?: string;
  category?: string;
  price?: number;
  provider?: string;
  id: number;
  userId: number;
}
