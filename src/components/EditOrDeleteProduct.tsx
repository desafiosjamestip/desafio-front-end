import styled from "styled-components";
import { Product, useProducts } from "../hooks/useProducts";
import { useNavigate} from "react-router"
const editImage = require ("../assets/edit.png");
const removeImage = require ("../assets/remove.png");


interface EditOrDeleteProps {
    product: Product
}


const Wrapper = styled.div`
    img{
        height: 30px;
    }
    padding-top: 20px;
    
`

export function EditOrDeleteProduct(props: EditOrDeleteProps){
    const navigate = useNavigate();
   
    const {deleteProduct} = useProducts()

    const removeProduct = () => {
        deleteProduct(props.product);
    }

    return (
        <Wrapper>
            <img src={editImage} title="editar" alt="editar" onClick={() => navigate('/cadastro')}/>
            <img src={removeImage} title="deletar" alt="deletar" onClick={()=> {navigate('/'); removeProduct()}}/>
        </Wrapper>
    )
}