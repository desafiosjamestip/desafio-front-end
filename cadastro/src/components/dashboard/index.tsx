import React, { useContext, useState } from "react";


import UserContext from "../../context/user/context";


import { Container, ParentComponent, Form, Button, Input, Title, Text, Section} from "./styles";


import { Link } from "react-router-dom";

const ChildrenOne: React.FC = () => {
 
  const { setState, state } = useContext(UserContext);
  const [cod, setCod] = useState<string>("");
  const [category, setEditCategory] = useState<string>("");
  const [nameProduct, setNameProduct] = useState<string>("");
  const [nameProvider, setNameProvider] = useState<string>("");
  const [price, setPrice] = useState<string>("");

  
  function handleEditCod() {
    setState({
      ...state,
      cod: cod,
      category: category,
      nameProduct: nameProduct,
      nameProvider: nameProvider,
      price: price,
    });
  }

  return (
    <ParentComponent> 
    
      <Section>
      <Title>Produto</Title>
       
          Codigo : <h3>{state.cod}</h3>      
        
          Categoria : <h3>{state.category}</h3>        
        
          Nome do Produto : <h3>{state.nameProduct}</h3>       
        
          Nome do Fornecedor : <h3>{state.nameProvider}</h3>        
       
          Valor do Produto : <h3>{state.price}</h3>
       
        <Link to="/"><Button>Excluir</Button></Link>  
        </Section>   
     
    
    <Form>    
      <Title>Alteração dos Dados do Produto</Title>
      
      <Container>
      <Input        
        placeholder="Novo codigo do Produto"
        onChange={(e) => setCod(e.target.value)}
      />
      <Button type="button" onClick={handleEditCod}>
        Alterar
      </Button>
      </Container>

      <Container>      
      <Input        
        placeholder="Nova Categoria do Produto"
        onChange={(e) => setEditCategory(e.target.value)}
      />
      <Button type="button" onClick={handleEditCod}>
        Alterar
      </Button>
      </Container>


      <Container>      
      <Input        
        placeholder="Novo nome do Produto"
        onChange={(e) => setNameProvider(e.target.value)}
      />
      <Button type="button" onClick={handleEditCod}>
        Alterar
      </Button>
      </Container>

      <Container>      
      <Input
        placeholder="Novo nome do Fornecedor"
        onChange={(e) => setNameProduct(e.target.value)}
      />
      <Button type="button" onClick={handleEditCod}>
        Alterar
      </Button>
      </Container>

      <Container>      
      <Input
        placeholder="Novo Preço do Produto"
        onChange={(e) => setPrice(e.target.value)}
      />
      <Button type="button" onClick={handleEditCod}>
        Alterar
      </Button>
      </Container>  

    </Form> 

    </ParentComponent> 
      

      
      
      
      
   
  );
};

export default ChildrenOne;
