import { useParams } from "react-router-dom"
import { EditOrDeleteProduct } from "../components/EditOrDeleteProduct";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { ProductView } from "../components/ProductView";
import { Product, useProducts } from "../hooks/useProducts";
import styled from "styled-components";

const StyledProductPage = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh; 
    

    div{
        display: flex;
    }
`

interface ProductProps {
    id: String
}

export function ProductPage() {
    const { products } = useProducts();

    const id = useParams().id || "";
    const idNumeric = parseInt(id);
    const product = products[idNumeric];

    return (
        <>
            <Header />
            <StyledProductPage>
                <div>
                    <ProductView id="id" />
                    <EditOrDeleteProduct product={product} />
                </div>
            </StyledProductPage>
            <Footer />

        </>
    )
}