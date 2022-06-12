import { useProducts } from "../../providers/ProductsProvider";
import Input from "../Input";
import { Form } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const ProductForm = () => {
  const {
    productList,
    createNewProduct,
    code,
    category,
    name,
    suplierName,
    price,
    setProductCode,
    setProductCategory,
    setProductName,
    setProductSuplier,
    setProductPrice,
  } = useProducts();

  const schema = yup.object().shape({
    code: yup.string().required("Campo obrigatório!"),
    category: yup.string().required("Campo obrigatório!"),
    name: yup.string().required("Campo obrigatório!"),
    suplierName: yup.string().required("Campo obrigatório!"),
    price: yup
      .number()
      .typeError("O valor digitado deve ser um numero")
      .required("Campo obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleSubmitData = () => {
    const product = { code, category, name, suplierName, price };
    createNewProduct(product);

    console.log(productList);
  };
  return (
    <Form onSubmit={handleSubmit(handleSubmitData)}>
      <Input
        placeholder="Digite o código do seu produto"
        label="Codigo do produto"
        type="text"
        name="code"
        register={register}
        error={errors.code?.message}
        onChange={(e) => setProductCode(e.target.value)}
      />
      <Input
        placeholder="Digite a categoria do seu produto"
        label="Categoria do produto"
        type="text"
        name="category"
        register={register}
        error={errors.category?.message}
        onChange={(e) => setProductCategory(e.target.value)}
      />
      <Input
        placeholder="Digite o nome do seu produto"
        label="Nome do produto"
        type="text"
        name="name"
        register={register}
        error={errors.name?.message}
        onChange={(e) => setProductName(e.target.value)}
      />
      <Input
        placeholder="Digite o fornecedor do seu produto"
        label="Fornecedor do produto"
        type="text"
        name="suplierName"
        register={register}
        error={errors.suplierName?.message}
        onChange={(e) => setProductSuplier(e.target.value)}
      />
      <Input
        placeholder="Digite o preço do seu produto"
        label="Preço do produto"
        type="number"
        name="price"
        register={register}
        error={errors.price?.message}
        onChange={(e) => setProductPrice(Number(e.target.value))}
      />
      <button type="submit">Registrar Produto</button>
    </Form>
  );
};

export default ProductForm;
