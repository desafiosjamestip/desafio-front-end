import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../../components/Input"
import { CustomForm } from "./style"
import Button from "../../components/Button"
import { useProducts } from "../../providers/ProductsProvider"

const Form = ({textButton, product, onSubmit}) =>{   
    //schema para validação de cadastro de produtos
const schema = yup.object().shape({
        productName: yup.string().required("Campo obrigatório").trim(),
        productCode: yup.string().required("Campo obrigatório").trim(),
        productCategory: yup.string().required("Campo obrigatório").trim(),
        productValue: yup.number().required("Campo obrigatório"),
        providerName: yup.string().required("Campo obrigatório").trim()
    })

    const {registerProduct} = useProducts()

    const  {register, handleSubmit, reset, formState: { errors }} = useForm({  //react-hook-form 
        resolver: yupResolver(schema)
    })

    return(
        /* Formulario para cadastro de produtos */
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <Input 
                register={register} 
                name="productName" 
                label="Nome do Produto" 
                errors={errors.productName?.message} 
                type="text"
                defaultValue={product? product.productName : ""}
            />
            <Input 
                register={register} 
                name="productCode" 
                label="Código do Produto" 
                errors={errors.productCode?.message} 
                type="text"
                defaultValue={product? product.productCode : ""}
            />
            <Input 
                register={register} 
                name="productCategory" 
                label="Categoria do Produto" 
                errors={errors.productCategory?.message} 
                type="text"
                defaultValue={product? product.productCategory : ""}
            />
            <Input 
                register={register} 
                name="productValue" 
                label="Valor do Produto" 
                errors={errors.productValue?.message} 
                type="number"
                defaultValue={product? product.productValue : ""}
            />
            <Input 
                register={register} 
                name="providerName" 
                label="Fornecedor" 
                errors={errors.providerName?.message} 
                type="text"
                defaultValue={product? product.providerName : ""}
            />

            <Button type="submit">{textButton}</Button>
        </CustomForm>
    )
}

export default Form