import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const useApi = () => ({
  listProducts: async () => {
    const response = await api.get('products');
    return response.data;
  },

  createProduct: async (name: string, provider: string, category: string, price: string) => {
    await api.post('products', { name, provider, category, price});
    return toast.success('Produto criado com sucesso!')
  },
  
  deleteProduct: async (id: string) => {
    await api.delete(`products/${id}`);
    return toast.success('Produto deletado com sucesso!')
  },

  editProduct: async (id: string ,name: string, provider: string, category: string, price: string) => {
    await api.put(`products/${id}`, {
      name, 
      provider, 
      category, 
      price
    });
  },

  listCategories: async () => {
    const response = await api.get('categories');
    return response.data;
  },

  createCategory: async (name: string) => {
    await api.post('categories', {
      name
    });
    return toast.success('Categoria criada com sucesso!')
  },

  deleteCategory: async (id: string) => {
    await api.delete(`categories/${id}`);
    return toast.success('Categoria deletada com sucesso!')
  }
})