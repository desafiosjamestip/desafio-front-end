import { IProduct } from "../contexts/ProductContext";

const KEY_STORAGE = "products";

export const listProducts = (): IProduct[] => {
  const products = JSON.parse(localStorage.getItem(KEY_STORAGE) || "[]");
  return products;
};

export const updateProduct = (product: IProduct) => {
  const products = listProducts();
  const idx = products.findIndex((p) => p.uuid === product.uuid);
  console.log("prod", product);
  console.log("idx", idx);
  if (idx > -1) products[idx] = product;
  localStorage.setItem(KEY_STORAGE, JSON.stringify(products));
};

export const deleteProduct = (uuid: string) => {
  const products = listProducts().filter((product) => product.uuid !== uuid);
  localStorage.setItem(KEY_STORAGE, JSON.stringify(products));
};

export const createProduct = (product: IProduct) => {
  const products = listProducts();
  products.unshift(product);
  localStorage.setItem(KEY_STORAGE, JSON.stringify(products));
};
