import { Container, Title, TableItems, Header, ItemDesc, CreateCategory, Button } from "./styles";
import { useProductContext } from "../../contexts/ProductProvider";
import { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard";
import toast from "react-hot-toast";

const CategoryList = () => {
  const [newCategory, setNewCategory] = useState('');
  const [isActive, setIsActive] = useState(false);

  const { categories, listCategories, createCategory } = useProductContext();

  useEffect(() => {
    listCategories();
  }, [])

  const handleCreate = () => {
    if(newCategory === '') {
      toast.error('Campo não pode ser vazio')
    } else {
      createCategory(newCategory);
      setIsActive(false);
    }
  }

  return (
    <Container>
      <Title>Categorias</Title>
      <TableItems>
        <Header>
          <ItemDesc>Código</ItemDesc>
          <ItemDesc>Nome</ItemDesc>
        </Header>
        {categories.length === 0 ? (
          <h4>Nenhuma categoria cadastrada.</h4>
          ) : (
            categories.map((category) => (
              <CategoryCard category={category} key={category.id}/>
          )))
        }
      </TableItems>
      {isActive ? 
        <CreateCategory>
          <input type='text' onChange={(cat) => setNewCategory(cat.target.value)}/>
          <Button onClick={handleCreate}>Adicionar</Button>
        </CreateCategory> : ''
        }
      <Button onClick={() => setIsActive(!isActive)}>Criar categoria</Button>
    </Container>
  )
}

export default CategoryList;