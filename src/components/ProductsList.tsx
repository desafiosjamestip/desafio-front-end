import { useProducts } from "../hooks/useProducts";
import { ProductItem } from "./ProductItem";
import styled from "styled-components";

const StyledProductsList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 16px;
    padding: 0 70px;


`

export function ProductsList() {
    const { products } = useProducts();
    return(
        <StyledProductsList>
        {products.map((product, index) => <ProductItem key={index} product={product} index={index} button={true} />)}
        </StyledProductsList>
    )
}