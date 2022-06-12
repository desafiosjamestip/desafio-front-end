export type Product = {
    name: string
    code: string
    category: string
    supplier: string
    price: string
}

export type ProductDispatch = {
    dispatchProducts: (product: Product) => void
    dispatchRemoveProduct: (deletedProduct: Product) => void
}

export type ProductContextData = [Product[], ProductDispatch]
