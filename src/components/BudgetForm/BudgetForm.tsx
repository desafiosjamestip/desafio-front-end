import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Product } from '../../models/Product';
import { useProduct } from '../../context/useProduct';
import {
  TextField,
  FormControl,
  Button,
  GridContainer,
  GridItem,
  Center,
} from '../../ui/components';

import { FormContainer } from './BudgetForm.styles';
import { api } from '../../server/api';
import { useNavigate } from 'react-router-dom';

type BudgetFormProps = {
  product?: Product;
};

const validationSchema = yup.object({
  code: yup.number().required().typeError('È necessário ser digitar o codigo'),
  name: yup.string().required().typeError('O nome é obrigatório'),
  provideName: yup.string().typeError('Somente letras'),
  price: yup.number().typeError('Somente números'),
  category: yup.string().typeError('Somente letras'),
});

const BudgetForm = ({ product }: BudgetFormProps) => {
  const { addProduct } = useProduct();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onBlur',
    defaultValues: {
      code: product?.code,
      name: product?.name,
      provideName: product?.provideName,
      price: product?.price,
      category: product?.category,
    },
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();
  async function onSubmit(data: Product) {
    await api.post('/products', data).then((response) => {
      addProduct(response.data);
    });
    navigate('/products');
  }

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <GridContainer noPadding columns={12} gutter={0}>
        <GridItem lg={12} sm={12}>
          <FormControl>
            <TextField
              label="Código do Produto"
              id="code"
              type="number"
              registerRef={register}
              errorMessage={errors?.code?.message}
              state={errors.code ? 'invalid' : 'neutral'}
            />
          </FormControl>
        </GridItem>
        <GridItem lg={12} sm={12}>
          <FormControl>
            <TextField
              label="Nome"
              id="name"
              type="text"
              required
              registerRef={register}
              errorMessage={errors?.name?.message}
              state={errors.name ? 'invalid' : 'neutral'}
            />
          </FormControl>
        </GridItem>
        <GridItem lg={12} sm={12}>
          <FormControl>
            <TextField
              label="Nome do Fornecedor"
              id="provideName"
              type="text"
              required
              registerRef={register}
              errorMessage={errors?.provideName?.message}
              state={errors.provideName ? 'invalid' : 'neutral'}
            />
          </FormControl>
        </GridItem>
        <GridItem lg={12} sm={12}>
          <FormControl>
            <TextField
              label="Valor do Produto"
              id="price"
              type="number"
              registerRef={register}
              errorMessage={errors?.price?.message}
              state={errors.price ? 'invalid' : 'neutral'}
            />
          </FormControl>
        </GridItem>

        <GridItem lg={12} sm={12}>
          <FormControl>
            <TextField
              label="Categoria do Produto "
              id="category"
              type="text"
              registerRef={register}
              errorMessage={errors?.category?.message}
              state={errors.category ? 'invalid' : 'neutral'}
            />
          </FormControl>
        </GridItem>
      </GridContainer>

      <FormControl>
        <Center>
          <Button type="submit" variant="solid">
            Salvar
          </Button>
        </Center>
      </FormControl>
    </FormContainer>
  );
};

export { BudgetForm };
