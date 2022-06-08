import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { CardStyle, DivCategorie, Id, Categorie, DivButton} from './style';

interface ProductsItems {
    id: string;
    categorie: string;
    product_name: string;
    supplier: string;
    price: string;
}

interface Product {
    product: ProductsItems
}

function Card({product}: Product){
    const {id, categorie, product_name, supplier, price} = product

    return (
        <CardStyle>
            <DivCategorie>
                <Id>cod. {id}</Id>
                <Categorie>{categorie}</Categorie>
            </DivCategorie>        
            <p>Fornecedor: {supplier}</p>
            <p>Preço: {Number(price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <DivButton>
                <button> <DeleteIcon/> </button>
                <button> <EditIcon/> </button>   
            </DivButton>                          
        </CardStyle>
    )
}

export default Card