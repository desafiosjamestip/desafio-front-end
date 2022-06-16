import { AnimationContainer, Container, Content, Form } from "./style";
import { useForm } from "react-hook-form";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

import Button from "../../Components/Button";
import { VitrineContext } from "../../Providers/listProducts";
import { useContext, useEffect, useState } from "react";
import Input from "../../Components/Input";
import { ContainerHeader, H3 } from "../ProductsList/style";

const EditForm = () => {
  const listProducts = JSON.parse(localStorage.getItem("listProducts")) || [];

  const [productActual, setProductActual] = useState(null);

  const { id } = useParams();

  const { updateProduct } = useContext(VitrineContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const history = useHistory();

  const toHome = () => {
    history.push("/");
  };

  const onSubmitFunction = (data) => {
    updateProduct(id, data);

    toHome();
  };

  useEffect(() => {
    const productSelect = listProducts.filter((product) => product.id === id);

    reset(productSelect[0]);
  }, [id]);

  return (
    <Container>
      <ContainerHeader>
        <H3>Edição de produtos</H3>
        <Button
          className="buttonHome"
          onClick={toHome}
          bgcolor={"#E0FFFF"}
          height={"40px"}
          children={"Visualizar Produtos"}
        />
      </ContainerHeader>
      <Content>
        <AnimationContainer>
          <Form onSubmit={handleSubmit(onSubmitFunction)}>
            <Input
              register={register}
              name="img"
              placeholder="Link da imagem"
            />

            <Input
              register={register}
              name="categoria"
              placeholder="Categoria do produto"
              error={errors.categoria?.message}
            />

            <Input
              register={register}
              name="nome"
              placeholder="Nome do produto"
              error={errors.nome?.message}
            />

            <Input
              register={register}
              name="fornecedor"
              placeholder="Nome do Fornecedor"
              error={errors.fornecedor?.message}
            />

            <Input
              register={register}
              name="valor"
              placeholder="Valor do Produto"
              error={errors.valor?.message}
            />

            <Button
              type={"submit"}
              width={"100%"}
              height={"40px"}
              children={"Concluir"}
              bgcolor={"#00d0b3"}
            />
          </Form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export default EditForm;
