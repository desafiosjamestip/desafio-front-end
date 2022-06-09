import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Modal } from '@mui/material';
import { CardStyle, DivCategorie, Id, Categorie, DivButton, Button} from './style';
import {useProducts} from '../../Providers/Products/context';
import ModalEdit from '../ModalEdit';


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
    const {removeProduct} = useProducts();
    const [open, setOpen] = useState(false);

    const {id, categorie, product_name, supplier, price} = product

    return (
        <CardStyle>
            <DivCategorie>
                <Id>cod. {id}</Id>
                <Categorie>{categorie}</Categorie>
            </DivCategorie>        
            <p>Fornecedor: {supplier}</p>
            <p>{product_name}</p>
            <p>Preço: {Number(price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <DivButton>
                <Button onClick={() => removeProduct(id)}> <DeleteIcon/> </Button>
                <Button edit onClick={() => setOpen(true)}> <EditIcon/> </Button>   
            </DivButton>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalEdit product={product}/>
            </Modal>                          
        </CardStyle>
    )
}

export default Card