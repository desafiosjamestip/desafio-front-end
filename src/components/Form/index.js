import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import Input from "../../components/Input"
import { toast } from "react-toastify"
import { CustomForm } from "./style"
import Button from "../../components/Button"
import { useProducts } from "../../providers/ProductsProvider"

const Form = ({textButton , type}) =>{
    const schema = yup.object().shape({
        productName: yup.string().required("Campo obrigatório").trim(),
        productCode: yup.string().required("Campo obrigatório").trim(),
        productCategory: yup.string().required("Campo obrigatório").trim(),
        productValue: yup.string().required("Campo obrigatório").trim(),
        providerName: yup.string().required("Campo obrigatório").trim()
    })

    const {registerProduct} = useProducts()

    const  {register, handleSubmit, reset, formState: { errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const onSubmit = (data,e) =>{
        e.target.reset()
        if(type === "registrar") {
            registerProduct(data)
            toast.success('Produto Cadastrado')
        }else{
            toast.success('Produto Editado')
        }
    }

    return(
        <CustomForm onSubmit={handleSubmit(onSubmit)}>
            <Input 
                register={register} 
                name="productName" 
                label="Nome do Produto" 
                errors={errors.productName?.message} 
                type="text"
            />
            <Input 
                register={register} 
                name="productCode" 
                label="Código do Produto" 
                errors={errors.productCode?.message} 
                type="text"
            />
            <Input 
                register={register} 
                name="productCategory" 
                label="Categoria do Produto" 
                errors={errors.productCategory?.message} 
                type="text"
            />
            <Input 
                register={register} 
                name="productValue" 
                label="Valor do Produto" 
                errors={errors.productValue?.message} 
                type="text"
            />
            <Input 
                register={register} 
                name="providerName" 
                label="Fornecedor" 
                errors={errors.providerName?.message} 
                type="text"
            />

            <Button type="submit">{textButton}</Button>
        </CustomForm>
    )
}

export default Form