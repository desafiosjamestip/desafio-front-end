import React from 'react'
import useProducts from '../../../hooks/useProducts'
import { ProductProps } from '../../../contexts/ProductContext'
import restaure from '../../../repo'

import { Container } from './styles'

const Consult: React.FC = () => {
    const { productsList, removeProduct } = useProducts()

    const handleRemoveProduct = (props: ProductProps) => {
        const newProductList = productsList.filter((prod) => prod.id !== props.id)
        removeProduct(newProductList)
    }

    const restaures = () => {
        console.log('dhbasjkhkjdsa')
        localStorage.setItem('@jamestips:products-list', JSON.stringify(restaure))
    }

    return (
        <Container>
            <button onClick={restaures}>RESTORE</button>
            <table style={{border: '1px solid'}}>
                <thead>
                    <tr >
                        <th style={{border: '1px solid'}}>ID</th>
                        <th style={{border: '1px solid'}}>Nome</th>
                        <th style={{border: '1px solid'}}>Categoria</th>
                        <th style={{border: '1px solid'}}>Fornecedor</th>
                        <th style={{border: '1px solid'}}>Valor</th>
                        <th style={{border: '1px solid'}}>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {productsList.map((prod) => (
                        <tr key={prod.id}>
                            <td style={{border: '1px solid'}}>{prod.id}</td>
                            <td style={{border: '1px solid'}}>{prod.name}</td>
                            <td style={{border: '1px solid'}}>{prod.category}</td>
                            <td style={{border: '1px solid'}}>{prod.provider}</td>
                            <td style={{border: '1px solid'}}>{prod.price}</td>
                            <td><button>EDITAR</button> <button type="button"
                                onClick={() => handleRemoveProduct(prod)}>EXCLUIR</button></td>
                        </tr>
                    ))}
                </tbody>


            </table>
        </Container>
    )
}

export default Consult