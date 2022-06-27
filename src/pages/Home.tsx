import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { ProductProvider } from "../hooks/useProducts"
import { ProductsList } from "../components/ProductsList";
import styled from "styled-components";


const StyledHome = styled.main`

    h1{
        margin-left: 60px;
        margin-top: 30px;
    }

`
export function Home() {

    return (
        <ProductProvider>
            <Header />
            <StyledHome>
                <h1>Home</h1>
                <ProductsList />
            </StyledHome>
            <Footer />
        </ProductProvider>
    )
}