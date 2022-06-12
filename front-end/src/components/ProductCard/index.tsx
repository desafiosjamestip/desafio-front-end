import { Container, Actions } from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Product } from '../../types/Product';

import { useProductContext } from '../../contexts/ProductProvider';
import { useNavigate } from 'react-router-dom';

type Props = {
  product: Product;
}

const ProductCard = ({product}: Props) => {
  const navigate = useNavigate();

  const { deleteProduct, listProducts} = useProductContext();

  const handleDelete = () => {
    deleteProduct(product.id);
    listProducts();
  }

  const editProduct = () => {
    navigate('form', { state: { product } });
  }

  return (
    <Container>
      <h5>{product?.id}</h5>
      <h5>{product?.name}</h5>
      <h5 className="category">{product?.category}</h5>
      <h5 className="provider">{product?.provider}</h5>
      <h5 className="price">{product?.price}</h5>
      <Actions>
        <button onClick={editProduct}>
          <FontAwesomeIcon icon={faPencil} className='edit'/>
        </button>  
        <button onClick={handleDelete}>
          <FontAwesomeIcon icon={faTrash} className='trash'/>
        </button>  
      </Actions>
    </Container>
  )
}

export default ProductCard;