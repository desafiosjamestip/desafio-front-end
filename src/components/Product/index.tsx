import { Container } from "./styles";
import { FiTrash, FiEdit } from 'react-icons/fi'
import { useProduct } from "../../contexts/ProductContext";
import EditProduct from "./EditProduct";
export default function ListProducts() {
  const { products, removeProduct } = useProduct()
  const handleRemove = (uuid?: string) => () => {
    if (uuid)
      removeProduct(uuid)
  }
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Code</th>
            <th>Category </th>
            <th>Product name </th>
            <th>Provider's name</th>
            <th>Value product</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.uuid}>
              <td>{product.code}</td>
              <td>{product.category}</td>
              <td>{product.name}</td>
              <td>{product.provider}</td>
              <td>{product.value}</td>
              <td><button type="button" data-testid="remove-task-button">
                <FiTrash onClick={handleRemove(product.uuid)} size={16} />
              </button></td>
              <td><button type="button" data-testid="edit-task-button">
                <EditProduct product={product} />
              </button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  )
}