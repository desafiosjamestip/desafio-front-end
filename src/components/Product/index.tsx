import { ProductContainer } from "./styled";

import { FaTrash, FaEdit } from "react-icons/fa";

import Product from "../../types/product";
import { useProduct } from "../../providers/Product";

type Products = {
    product: Product;
}

const ProductItem = ({ product }: Products) => {

    const { changeModalVisibility, setProductState } = useProduct()

    const editProduct = (product: Product) => {
        setProductState(product)
        changeModalVisibility(true, "edit")
    }
    
    const deleteProduct = (product: Product) => {
        setProductState(product)
        changeModalVisibility(true, "delete")
    }

    return (
        <ProductContainer>
            <div className="tableMain">
                <div className="tableBody">
                    <div className="tableRow">
                        <div className="tableCell iconCell">
                            <button onClick={() => editProduct(product)}>{<FaEdit />}</button>
                            <button onClick={() => deleteProduct(product)}>{<FaTrash />}</button>
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