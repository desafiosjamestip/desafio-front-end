import { HeaderStyle, ImageStyle, MainStyle, Wrapper, Search, InputStyle, ButtonSearch, LinkAdd, DivAdd} from './style';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SearchIcon from '@mui/icons-material/Search';
import {useProducts} from "../../Providers/Products/context"
import Card from '../../Components/Card'

interface ProductsItems {
    id: string;
    categorie: string;
    product_name: string;
    supplier: string;
    price: string;
}

function DashBoard(){
    const { listProducts } = useProducts();

    return (
      <>
          <HeaderStyle>
            <ImageStyle src="https://resultados.jamestip.com/static/media/logo_horizontal_white.f884a3ed.svg" alt="" />
          </HeaderStyle>
          <MainStyle>
               <Search>
                    <InputStyle type="text" placeholder="digite o nome do produto"/>
                    <ButtonSearch> Pesquisar Produto <SearchIcon/> </ButtonSearch>
               </Search>
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

export default DashBoard