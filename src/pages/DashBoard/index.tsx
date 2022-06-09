import { HeaderStyle, ImageStyle, MainStyle, Wrapper, LinkAdd, DivAdd} from './style';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {useProducts} from "../../Providers/Products/context";
import Card from '../../Components/Card';
import {Navigate} from "react-router-dom";
interface ProductsItems {
    id: string;
    categorie: string;
    product_name: string;
    supplier: string;
    price: string;
}



function DashBoard(){
    const { listProducts } = useProducts();
    const token = localStorage.getItem('@userToken');

    if(!token){
        return (
            <Navigate to='/login'/>
        )
    }else{
        return (
            <>
                <HeaderStyle>
                  <ImageStyle src="https://resultados.jamestip.com/static/media/logo_horizontal_white.f884a3ed.svg" alt="" />
                </HeaderStyle>
                <MainStyle>
                     <section>
                         <DivAdd>
                             <LinkAdd to="/register-products"> Adicionar Produto <AddCircleIcon/> </LinkAdd>
                         </DivAdd>
                         <Wrapper>
                             {listProducts && listProducts.map((product: ProductsItems) => <Card key={product.id} product={product}></Card>)}
                         </Wrapper>
                     </section>
                </MainStyle>
            </>
          )
    }
    
}

export default DashBoard