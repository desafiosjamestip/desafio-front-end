import { Link } from "react-router-dom";
import styled from "styled-components"

const StyledProductItem = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    h2{
        padding-bottom: 10px;
    }

    button{
        margin-top: 10px;
        padding: 4px 12px;
    }
`
const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    
`

interface ProductProps {
    product:
    {
        id: String,
        category: String,
        name: String,
        provider: String,
        price: String
    },
    index: number,
    button?: boolean,
}

export function ProductItem(props: ProductProps) {
    const { id, category, name, provider, price } = props.product;
    const index = props.index;
    const button = props.button;

    return (
        <StyledProductItem>
            <h2>{name}</h2>
            <p>Código do produto: {id}</p>
            <p>Categoria: {category}</p>
            <p>Fornecedor: {provider}</p>
            <p>Preço: <strong>{price} </strong></p>
            {button && <button><StyledLink to={`/produto/${index}`}>Ver detalhes</StyledLink></button>}
        </StyledProductItem>
    )
}