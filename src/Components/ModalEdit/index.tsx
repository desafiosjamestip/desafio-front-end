import {useForm} from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useProducts } from '../../Providers/Products/context';
import { FormStyle, ReturnLink, InputStyle, ButtonStyle, ArrowBackStyle } from "./style";

interface ProductsItems {
    id: string;
    categorie: string;
    product_name: string;
    supplier: string;
    price: string;
}

interface Products{
    product: ProductsItems
}

function ModalEdit({product}: Products){
    const {id, categorie, product_name, supplier, price} = product;

    const {editProduct} = useProducts();

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

    const handleEditProduct = (data: ProductsItems) => {
        editProduct(data, id)
    }

    return (
        <>
                <ReturnLink to="/dashboard"> <ArrowBackStyle/> Voltar para o dashboard</ReturnLink>
            <FormStyle action="" onSubmit={handleSubmit(handleEditProduct)}>
                <h2>Edite seu Produto</h2>
                <div>
                    <InputStyle type="text" placeholder="Digite o código do seu Produto" defaultValue={id} {...register('id')}/>
                </div>
                <div>
                    <InputStyle type="text" placeholder="Digite a categoria do Produto" defaultValue={categorie} {...register('categorie')}/>
                </div>
                <div>
                    <InputStyle type="text" placeholder="Nome do Produto" defaultValue={product_name} {...register('product_name')}/>
                </div>
                <div>
                    <InputStyle type="text" placeholder="Nome do Fornecedor" defaultValue={supplier} {...register('supplier')}/>   
                </div>
                <div>
                    <InputStyle type="text" placeholder="Valor do Produto" defaultValue={price} {...register('price')}/>    
                </div>        
                <ButtonStyle type='submit'>Editar</ButtonStyle>
            </FormStyle>
        </>
    )
}

export default ModalEdit