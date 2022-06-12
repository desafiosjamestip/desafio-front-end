import { useEffect, useState } from "react";
import { Container, Form, Title, Button } from "./styles";
import { useProductContext } from "../../contexts/ProductProvider";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const ProductForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  let selectedProduct: any = location.state

  const { createProduct, editProduct, categories, listCategories } = useProductContext();

  const [id] = useState(selectedProduct ? selectedProduct.product.id : '')
  const [name, setName] = useState(selectedProduct ? selectedProduct.product.name : '');
  const [provider, setProvider] = useState(selectedProduct ? selectedProduct.product.provider: '');
  const [category, setCategory] = useState(selectedProduct ? selectedProduct.product.category : '');
  const [price, setPrice] = useState(selectedProduct ? selectedProduct.product.price : '');

  useEffect(() => {
    listCategories();
  }, [])

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if(name ==='' || provider === ''|| category === '' || price ==='') {
      toast.error('Todos os campos devem ser preenchidos');
    } else  if(selectedProduct) {
      editProduct(id, name, provider, category, price);
      navigate('/');
    } else {
      createProduct( name, provider, category, price );
      navigate('/');
    }
  }

  const createCategory = () => {
    navigate('/categories', )
  }

  return (
    <Container>
      <Title>{selectedProduct ? 'Editar Produto' : 'Cadastrar Produto'}</Title>
      <Form>
        <label>Nome: 
          <input 
            type='text' 
            id='nome' 
            placeholder="Insira o nome do produto" 
            value={name}
            onChange={name => setName(name.target.value) }
          />
        </label>
        <label>Fornecedor: 
          <input 
            type='text' 
            id='nome' 
            placeholder="Insira o nome do fornecedor"
            value={provider}
            onChange={prov => setProvider(prov.target.value)}
          />
        </label>
        <label>Categoria: 
          {categories.length === 0 ? (
            <button onClick={createCategory} className='categoryAdd'>
              Cadastrar categoria
            </button>
            ) : (
            <select 
              onSelect={category}
              placeholder="Escolha a categoria do produto"
              onChange={cat => setCategory(cat.target.value)}
            >
              <option value=''>Selecione uma categoria</option>
              {categories.map((category)=> (
                <option value={category.name}>{category.name}</option>
              ))}
            </select>
          )}
        </label>
        <label>Valor do Produto: 
          <input 
            type='number' 
            id='nome' 
            value={price}
            placeholder="Insira o valor do Produto" 
            onChange={e => setPrice(e.target.value)}
          />
        </label>
        <Button onClick={handleSubmit}>
          Salvar
        </Button>
      </Form>
    </Container>
  )
}

export default ProductForm;