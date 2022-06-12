import { createContext } from "react";
import { Category } from "../types/Category";
import { Product } from "../types/Product";

export type ProductContextType = {
  categories: Category[];
  products: Product[];
  listProducts: () => Promise<Product[]>;
  createProduct: (name: string, provider: string, category: string, price: string) => void;
  deleteProduct: (id: string) => void;
  editProduct: (id: string ,name: string, provider: string, category: string, price: string) => void;
  listCategories: () => Promise<Category[]>;
  createCategory: (name: string) => void;
  deleteCategory: (id: string) => void;
}
export const ProductContext = createContext<ProductContextType>(null!);