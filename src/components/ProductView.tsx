import { useParams } from "react-router";
import { useProducts } from "../hooks/useProducts";
import { ProductItem } from "./ProductItem";

interface ProductProps {
    id: String
}

export function ProductView(props: ProductProps) {
    const { products } = useProducts();

    const id = useParams().id || "";
    const idNumeric = parseInt(id);
    const product = products[idNumeric];

    return (
        <>
            <ProductItem product={{
                id: product.id,
                category: product.category,
                name: product.name,
                provider: product.provider,
                price: product.price
            }} index={idNumeric} />
        </>
    )
}