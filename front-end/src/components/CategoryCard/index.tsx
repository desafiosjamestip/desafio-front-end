import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Category } from "../../types/Category";
import { Container, Actions } from "./styles";
import { useProductContext } from "../../contexts/ProductProvider";

type Props = {
  category: Category;
}

const CategoryCard = ({category}: Props) => {
  const { deleteCategory, listCategories } = useProductContext();

  const handleDelete = () => {
    deleteCategory(category.id);
    listCategories();
  }

  return (
    <Container>
      <h5>{category.id}</h5>
      <h5 className="name">{category.name}</h5>
      <Actions>
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash}/>
        </button>
      </Actions>
    </Container>  
  )
}

export default CategoryCard;