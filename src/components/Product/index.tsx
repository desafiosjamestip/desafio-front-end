import { FaTrash, FaEdit } from "react-icons/fa";

import Product from "../../types/product";
import { ProductContainer } from "./styled";

type Products = {
    product: Product;
}

const ProductItem = ({ product }: Products) => {

    return (
        <ProductContainer>
            <div>
                {<FaTrash />}
                {<FaEdit />}
            </div>

            <span>{product.name}</span>
            <span>{product.provider}</span>
            <span>{product.category}</span>
            <span>{product.price}</span>
            <span>{product.id}</span>
        </ProductContainer>
    )
}

export default ProductItem;