import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/user/context";
import { Container, ParentComponent, Form, Button, Input, Title} from "./styles";



const FormData: React.FC = () => {
  
  const [cod, setCod] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [nameProduct, setNameProduct] = useState<string>("");
  const [nameProvider, setNameProvider] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  
  const { setState: setGlobalState } = useContext(UserContext);

  
  function handleSubmit() {
    setGlobalState({ cod, category, nameProduct, nameProvider, price });
  }
  
  return (
    <Container>
     
      
        <Form>
          <Title>Cadastro de Produtos</Title>
          <Input
            placeholder="Código do Produto"
            onChange={(e) => setCod(e.target.value)}
          />{" "}
           <Input            
            placeholder="Categoria"
            onChange={(e) => setCategory(e.target.value)}
          />{" "}
          <Input
            
            placeholder="Nome do Produto"
            onChange={(e) => setNameProduct(e.target.value)}
          />{" "}
          <Input
            
            placeholder="Nome do Fornecedor"
            onChange={(e) => setNameProvider(e.target.value)}
          />{" "}
          <Input            
            placeholder="Preço"
            onChange={(e) => setPrice(e.target.value)}
          />{" "}
          <Link to="/products"><Button type="button" onClick={handleSubmit}>
          Cadastrar
          </Button></Link>
        </Form>
      
      
    </Container>
  );
};

export default FormData;
