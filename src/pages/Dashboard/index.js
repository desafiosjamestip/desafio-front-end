import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"
import { useProducts } from "../../providers/ProductsProvider"

const Dashboard = () =>{
    const {products} = useProducts()

    return(
        <>
        <Header/>
        <ProductsList/>
        </>
    )
}

export default Dashboard