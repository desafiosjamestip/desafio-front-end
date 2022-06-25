import { useState } from "react";
import { useProducts } from "../hooks/useProducts";
import styled from "styled-components";

const StyledRegistrationForm = styled.main`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    h1{
        margin-bottom: 20px;
    }
   
    form{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        input{
            width: 350px;
            margin-bottom: 10px;
            border: none;
            border-bottom: 1px solid var(--text);
            background-color: var(--background);

            &:focus{
                outline: none;
            }
        }

        button{
            width: 150px;
            padding: 5px 0;
            margin-top: 30px;
        }
    }
`

export function ResgistrationForm() {
    const { products, addProduct } = useProducts();
    const [id, setId] = useState("");
    const [category, setCategory] = useState("");
    const [name, setName] = useState("");
    const [provider, setProvider] = useState("");
    const [price, setPrice] = useState("");
    const [isFormSent, setIsFormSent] = useState(false);

    const handleClick = () => {
        const newProduct = {
            id: id,
            category: category,
            name: name,
            provider: provider,
            price: price
        }
        addProduct(newProduct);
        setIsFormSent(true);

        setId("");
        setCategory("");
        setName("");
        setProvider("");
        setPrice("");

    }

    return (
        <StyledRegistrationForm>
            <h1>Cadastro de produto</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="id">Código do produto</label>
                <input type="text" id="id" onChange={(e) => setId(e.target.value)} />

                <label htmlFor="category">Categoria do produto</label>
                <input type="text" id="category" onChange={(e) => setCategory(e.target.value)} />

                <label htmlFor="name">Nome do produto</label>
                <input type="text" id="name" onChange={(e) => setName(e.target.value)} />

                <label htmlFor="provider">Fornecedor</label>
                <input type="text" name="" id="provider" onChange={(e) => setProvider(e.target.value)} />

                <label htmlFor="price">Valor do produto</label>
                <input type="number" id="price" onChange={(e) => setPrice(e.target.value)} />

                <button onClick={handleClick}>Cadastrar</button>
                {isFormSent && <span>Produto cadastrado com sucesso</span>}
            </form>
        </StyledRegistrationForm>
    )
}