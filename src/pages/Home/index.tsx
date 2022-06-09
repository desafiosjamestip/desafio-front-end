import { useEffect, useState } from "react";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import empty from "../../assets/empty.svg";
import Button from "../../components/Button";
import Header from "../../components/Header";
import { useProducts } from "../../hooks/useProducts";
import Styled from "./styles";

interface ProductInterface {
  id: string;
  name: string;
  provider: string;
  category: string;
  value: string;
}

export default function Home() {
  const { products, setSelectedProduct, removeItem } = useProducts();
  const navigate = useNavigate();
  const [hasContent, setHasContent] = useState(true);

  const handleUpdateItem = (product:ProductInterface) => {
    setSelectedProduct(product)
    navigate("/prod/edit")
  }

  const handleDeleteItem = (product:ProductInterface) => {
    removeItem(product)
  }

  useEffect(() => {
    setHasContent(products.length > 0);
  }, [products]);

  useEffect(() => {
    setHasContent(products.length > 0);
  }, []);

  return (
    <>
      <Header showButton fullWidth>
        {hasContent ? (
          <Styled.Container>
            <Styled.Section>
              <Styled.Table>
                <Styled.Thead>
                  <Styled.Tr>
                    <Styled.Th>Código</Styled.Th>
                    <Styled.Th>Nome do Produto</Styled.Th>
                    <Styled.Th>Fornecedor</Styled.Th>
                    <Styled.Th>Categoria</Styled.Th>
                    <Styled.Th>Valor</Styled.Th>
                    <Styled.Th></Styled.Th>
                  </Styled.Tr>
                </Styled.Thead>
                <Styled.Tbody>
                  {products.map((product) => {
                    return (
                      <Styled.Tr key={product.id}>
                        <Styled.Td>{product.id}</Styled.Td>
                        <Styled.Td>{product.name}</Styled.Td>
                        <Styled.Td>{product.provider}</Styled.Td>
                        <Styled.Td>{product.category}</Styled.Td>
                        <Styled.Td>{product.value}</Styled.Td>
                        <Styled.Td>
                          <Styled.ButtonGroup>
                            <Button
                              id="delete-product"
                              title="Excluir produto"
                              onClick={() => handleDeleteItem(product)}
                            >
                              <FiTrash
                                color="#FF0000"
                                size={24}
                                strokeWidth={2}
                              />
                            </Button>
                            <Button
                              id="edit-product"
                              title="Editar produto"
                              onClick={() => handleUpdateItem(product)}
                            >
                              <FiEdit
                                color="#5FB541"
                                size={24}
                                strokeWidth={2}
                              />
                            </Button>
                          </Styled.ButtonGroup>
                        </Styled.Td>
                      </Styled.Tr>
                    );
                  })}
                </Styled.Tbody>
              </Styled.Table>
            </Styled.Section>
          </Styled.Container>
        ) : (
          <Styled.Container>
            <Styled.Image
              src={empty}
              alt="Nenhum produto foi adicionado ainda"
            />
            <Styled.Paragraph>
              Nenhum produto foi adicionado ainda
            </Styled.Paragraph>
            <Button
              id="add-product"
              title="Adicionar produto"
              onClick={() => navigate("/prod/create")}
            >
              <FiPlus strokeWidth={3} />
              Adicionar produto
            </Button>
          </Styled.Container>
        )}
      </Header>
    </>
  );
}
