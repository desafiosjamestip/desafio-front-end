import React from 'react'
import {
    DeleteButton,
    ProductCategory,
    ProductCode,
    ProductPrice,
    ProductsCardContainer,
    ProductSupplier,
    ProductTitle,
    TrashIcon,
} from './styled'
import Trash from '@/assets/icons/trash-icon.png'

type ICardProps = {
    title: string
    code: string
    category: string
    supplier: string
    price: string
    onClick: () => void
}

const ProductCard: React.FC<ICardProps> = ({
    title,
    code,
    category,
    supplier,
    price,
    onClick,
}) => {
    return (
        <>
            <ProductsCardContainer>
                <DeleteButton onClick={onClick}>
                    <TrashIcon src={Trash} />
                </DeleteButton>
                <ProductTitle>{title}</ProductTitle>
                <ProductCode>{code}</ProductCode>
                <ProductCategory>{category}</ProductCategory>
                <ProductSupplier>{supplier}</ProductSupplier>
                <ProductPrice>{price}</ProductPrice>
            </ProductsCardContainer>
        </>
    )
}

export default ProductCard
