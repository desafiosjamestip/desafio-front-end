import { FaTrash, FaEdit } from "react-icons/fa";

import Product from "../../types/product";
import { ProductContainer } from "./styled";

type Products = {
    product: Product;
}

const ProductItem = ({ product }: Products) => {

    return (
        <ProductContainer>
            <div className="tableMain">
                <div className="tableBody">
                    <div className="tableRow">
                        <div className="tableCell iconCell">
                            <button>{<FaTrash />}</button>
                            <button>{<FaEdit />}</button>
                        </div>
                        <span className="tableCell">{product.name}</span>
                        <span className="tableCell">{product.provider}</span>
                        <span className="tableCell">{product.category}</span>
                        <span className="tableCell">{product.price}</span>
                        <span className="tableCell idCell">{product.id}</span>
                    </div>
                </div>
            </div>
        </ProductContainer>
    )
}

export default ProductItem;