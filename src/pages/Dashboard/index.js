import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"

const Dashboard = () =>{

    return(
        <>
        <Header button={"Cadastro"} path={"/"}/>
        <ProductsList/>
        </>
    )
}

export default Dashboard