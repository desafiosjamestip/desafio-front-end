import { toast } from "react-toastify"
import { Title } from "./style"
import Header from "../../components/Header"
import { useProducts } from "../../providers/ProductsProvider"
import Form from "../../components/Form"

const ProductRegister = () =>{
    const {registerProduct} = useProducts()

    const onSubmit = (data,e) =>{
        e.target.reset()
        registerProduct(data)
        toast.success('Produto Cadastrado')
    }
    return(
        <>
        <Header button={"Dashboard"} path={"/dashboard"}/>
        <Title>Cadastro de Produtos</Title>
        <Form textButton={"Cadastrar"} onSubmit={onSubmit}/>
        </>
    )
}

export default ProductRegister