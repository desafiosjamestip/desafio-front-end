import { ProductsProvider } from "./ProductsProvider"

const Providers = ({children}) => {
    return(
        <>
        <ProductsProvider>
            {children}
        </ProductsProvider>
        </>
    )
}

export default Providers