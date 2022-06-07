import {ReactNode} from "react"
import {ProductsProvider} from './Products/context' 

interface ProvidersProps{
    children: ReactNode;
}

function Providers({children}: ProvidersProps){
    return (
        <ProductsProvider>
            {children}
        </ProductsProvider>
    )
}

export default Providers