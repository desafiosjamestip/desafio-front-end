import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input";
import { Container, ContainerForm, ContainerInput, Form } from "./style";
import { useHistory } from "react-router-dom";
import { useProduct } from "../../context/Products";
import Header from "../../components/Header";

const Register = () => {
  const { addProduct } = useProduct();
  const history = useHistory();
  // const [value, setValue] = useState("");

  // console.log(mask("00000000000", ["000.000.000-00"]));

  // const moneyMask = (e: any) => {
  //   setValue(
  //     mask(unMask(e.target.value), [
  //       "9,99",
  //       "99,99",
  //       "999,99",
  //       "9.999,99",
  //       "99.999,99",
  //       "999.999,99",
  //       "9.999.999,99",
  //     ])
  //   );
  // };

  const schema = yup.object().shape({
    code: yup.string().required("Código do produto obrigatório"),
    category: yup.string().required("Categoria do produto obrigatória"),
    productName: yup.string().required("Nome do produto obrigatório"),
    providerName: yup.string().required("Nome do fornecedor obrigatório"),
    value: yup.string().required("Valor do produto obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onHandleSubmit = (data: any) => {
    addProduct(data);
  };

  return (
    <Container>
      <Header />

      <ContainerForm>
        <Form onSubmit={handleSubmit(onHandleSubmit)}>
          <ContainerInput>
            <Input
              type="text"
              placeholder="Digite aqui"
              name="code"
              register={register}
              label="Código do produto"
            />
            {errors && <span className="error">{errors.code?.message}</span>}
          </ContainerInput>

          <ContainerInput>
            <Input
              type="text"
              placeholder="ex: eletrônico"
              name="category"
              register={register}
              label="Categoria do produto"
            />
            {errors && (
              <span className="error">{errors.category?.message}</span>
            )}
          </ContainerInput>
          <ContainerInput>
            <Input
              type="text"
              placeholder="Digite aqui"
              name="productName"
              register={register}
              label="Nome do produto"
            />
            {errors && (
              <span className="error">{errors.productName?.message}</span>
            )}
          </ContainerInput>
          <ContainerInput>
            <Input
              type="text"
              placeholder="Digite aqui"
              name="providerName"
              register={register}
              label="Nome do fornecedor"
            />
            {errors && (
              <span className="error">{errors.providerName?.message}</span>
            )}
          </ContainerInput>

          <ContainerInput>
            <Input
              type="text"
              placeholder="Digite aqui"
              name="value"
              register={register}
              label="Valor do produto"
            />
            {errors && <span className="error">{errors.value?.message}</span>}
          </ContainerInput>

          <button type="submit">Cadastrar</button>
          <button
            className="products"
            onClick={() => history.push("/products")}
          >
            Ver produtos
          </button>
        </Form>
      </ContainerForm>
    </Container>
  );
};

export default Register;
