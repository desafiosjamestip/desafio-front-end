import { useProducts } from "../../providers/ProductsProvider"
import Product from "../Product"
import { CustomLi, CustomUl, Description } from "./style"

const ProductsList = () =>{
    const { products } = useProducts()

    return(
        <>
        <Description>
            <p>Nome do Produto</p>
            <p>Código</p>
            <p>Categoria</p>
            <p>Preço</p>
            <p>Fornecedor</p>
        </Description>
        <CustomUl>
            {products.length === 0 ? 
                <CustomLi>Nenhuma produto Cadastrado</CustomLi>
            :
                products.map((product, index) => 
                    <Product key={index} product={product}/>
                )
            }
        </CustomUl>
        </>
    )
}

export default ProductsList