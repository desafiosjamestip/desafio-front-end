import Header from "../../components/Header";
import Styled from "./styles";
import empty from "../../assets/empty.svg";
import Button from "../../components/Button";
import { FiEdit, FiPlus, FiTrash } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [hasContent, setHasContent] = useState(true);

  return (
    <>
      <Header showButton fullWidth>
        <Styled.Container>
          {hasContent ? (
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
                  <Styled.Tr>
                    <Styled.Td>Código</Styled.Td>
                    <Styled.Td>Nome do Produto</Styled.Td>
                    <Styled.Td>Fornecedor</Styled.Td>
                    <Styled.Td>Categoria</Styled.Td>
                    <Styled.Td>Valor</Styled.Td>
                    <Styled.Td>
                      <Styled.ButtonGroup>
                        <Button
                          id="delete-product"
                          title="Excluir produto"
                          onClick={() => navigate("/prod/create")}
                        >
                          <FiTrash color="#FF0000" size={24} strokeWidth={2} />
                        </Button>
                        <Button
                          id="edit-product"
                          title="Editar produto"
                          onClick={() => navigate("/prod/create")}
                        >
                          <FiEdit color="#5FB541" size={24} strokeWidth={2} />
                        </Button>
                      </Styled.ButtonGroup>
                    </Styled.Td>
                  </Styled.Tr>
                </Styled.Tbody>
              </Styled.Table>
            </Styled.Section>
          ) : (
            <>
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
            </>
          )}
        </Styled.Container>
      </Header>
    </>
  );
}
