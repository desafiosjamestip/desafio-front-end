import * as yup from 'yup';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useProducts } from '../../Providers/Products/context';
import { FormStyle, ReturnLink, InputStyle, ButtonStyle, ArrowBackStyle } from "./style";
import {toast} from 'react-toastify';

interface ProductsItems {
    id: string;
    categorie: string;
    product_name: string;
    supplier: string;
    price: string;
}

function RegisterProducts(){
    const { createNewProduct } = useProducts();

    const schema = yup.object().shape({
        id: yup.string().required(),
        categorie: yup.string().required(),
        product_name: yup.string().required(),
        supplier: yup.string().required(),
        price: yup.string().required(),
    })

    const {register, handleSubmit} = useForm<ProductsItems>({
        resolver: yupResolver(schema)
    })

    const createProduct = (data: ProductsItems) => {
        createNewProduct(data)
        toast.success("Produto cadastrado com sucesso!", {
            style: {
              backgroundColor: "#343B41",
              color: "white",
              fontSize: "14px",
              fontWeight: "bold",
            },
          });
        const form: any = document.querySelector('form');
        form.reset();
    }
    
    return (
       <>
            <ReturnLink to="/dashboard"> <ArrowBackStyle/> Voltar para o dashboard</ReturnLink>
            <FormStyle onSubmit={handleSubmit(createProduct)}>
                <h2>Cadastre seu produto</h2>
                <div>
                    <InputStyle type="text" placeholder="Digite o código do seu Produto" {...register('id')}/>
                </div>
                <div>
                    <InputStyle type="text" placeholder="Digite a categoria do Produto" {...register('categorie')}/>
                </div>
                <div>
                    <InputStyle type="text" placeholder="Nome do Produto" {...register('product_name')}/>
                </div>
                <div>
                    <InputStyle type="text" placeholder="Nome do Fornecedor" {...register('supplier')}/>   
                </div>
                <div>
                    <InputStyle type="text" placeholder="Valor do Produto" {...register('price')}/>    
                </div>        
                <ButtonStyle type='submit'>Adicionar</ButtonStyle>
            </FormStyle>
       </>
    )
}

export default RegisterProducts