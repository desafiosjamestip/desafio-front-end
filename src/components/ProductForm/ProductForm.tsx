import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IProduct } from '../../interfaces/Product.interfaces';
import { useProduct } from '../../hooks/UserProvider';
import {
  Box,
  Form,
  GridContainer,
  GridItem,
  Row,
  TextField,
} from '../../styles/components';
import { Button } from '../../styles/components/Button';
import { colors } from '../../styles/tokens';

interface ProductFormProps {
  product?: IProduct;
}

const validationSchema = yup.object({
  code: yup
    .number()
    .required('O codígo do produto é obrigatório')
    .typeError('O código é obrigatório'),
  name: yup.string().required('O nome é obrigatório'),
  supplierName: yup.string(),
  category: yup.string(),
});
const ProductForm = ({ product }: ProductFormProps) => {
  const { addProduct } = useProduct();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      code: product?.code,
      name: product?.name,
      supplierName: product?.supplierName,
      price: product?.price,
      category: product?.category,
    },
    resolver: yupResolver(validationSchema),
  });

  function onSubmit(data: IProduct) {
    addProduct(data);
    navigate('/list');
  }
  return (
    <Box width="1000px" backgroundColor={colors.white} height="100%">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <GridContainer columns={12}>
          <GridItem lg={6}>
            <TextField
              label="Código do Produto"
              id="code"
              type="number"
              required
              registerRef={register}
              errorMessage={errors?.code?.message}
              state={errors.code ? 'invalid' : 'neutral'}
            />
          </GridItem>
          <GridItem lg={6}>
            <TextField
              label="Nome"
              id="name"
              type="text"
              required
              registerRef={register}
              errorMessage={errors?.name?.message}
              state={errors.name ? 'invalid' : 'neutral'}
            />
          </GridItem>
          <GridItem lg={6}>
            <TextField
              label="Fornecedor"
              id="supplierName"
              type="text"
              registerRef={register}
              errorMessage={errors?.supplierName?.message}
              state={errors.supplierName ? 'invalid' : 'neutral'}
            />
          </GridItem>
          <GridItem lg={6}>
            <TextField
              label="Valor R$"
              id="price"
              type="number"
              required
              registerRef={register}
              errorMessage={errors?.price?.message}
              state={errors.price ? 'invalid' : 'neutral'}
            />
          </GridItem>
          <GridItem lg={6}>
            <TextField
              label="Categoria"
              id="category"
              type="text"
              registerRef={register}
              errorMessage={errors?.category?.message}
              state={errors.category ? 'invalid' : 'neutral'}
            />
          </GridItem>
        </GridContainer>
        <Row>
          <Button type="submit">Salvar</Button>
        </Row>
      </Form>
    </Box>
  );
};
export { ProductForm };
