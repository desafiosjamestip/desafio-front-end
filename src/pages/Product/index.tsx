import React from 'react';
import { ProductImg, ProductItem, ProductItemPrice } from './styles';
import {Title} from '../Main/styles';
import { useParams } from 'react-router-dom';

// import { Container } from './styles';

const Product: React.FC = () => {

    const [product, setProduct] = React.useState([]);
    const {index} = useParams();

    const products = [
        { id: 70709795, image: "https://savegnago.vteximg.com.br/arquivos/ids/293238_2", name: "Borracha Escolar Faber Castell Super Soft", categories: "Bazar E Utilidades", price: 5.39, brand: "Faber Castell" },
        { id: 70709271, image: "https://savegnago.vteximg.com.br/arquivos/ids/296943_2", name: "Cereal Barra Linea 60g Cookies Cream", categories: "Mercearia", price: 4.99, brand: "Linea" },
        { id: 70712433, image: "https://savegnago.vteximg.com.br/arquivos/ids/268054_2", name: "Sobremesa Chandelle 200g Chantilly Caramelo", categories: "Laticínios", price: 4.99, brand: "Chandelle" },
        { id: 70705194, image: "https://savegnago.vteximg.com.br/arquivos/ids/276040_2", name: "Vagem Macarrao Organica Solo Vivo 300g", categories: "Hortifruti", price: 6.99, brand: "Solo Vivo" },
        { id: 70707050, image: "https://savegnago.vteximg.com.br/arquivos/ids/448210_2", name: "Tempero Smart Zero Sódio 48g Frango", categories: "Mercearia", price: 18.38, brand: "Smart" },
        { id: 70703001, image: "https://savegnago.vteximg.com.br/arquivos/ids/305299_2", name: "Amaciante Roupa Baby Soft 5l Toque Cuidado", categories: "Limpeza", price: 13.95, brand: "Baby Soft" },
        { id: 70714252, image: "https://savegnago.vteximg.com.br/arquivos/ids/270090_2", name: "Acendedor Alcool Solido Fiat Lux", categories: "Bazar E Utilidades", price: 11.49, brand: "Fiat Lux" },
        { id: 70710641, image: "https://savegnago.vteximg.com.br/arquivos/ids/291388_2", name: "Mostarda Kuhne 255g Levemente Picante", categories: "Mercearia", price: 18.68, brand: "Kuhne" },
    ]

  return(
    <main style={{backgroundColor: "#E9ECEC", height:"auto", paddingBottom: "280px", paddingTop: "30px"}} >
        <div className="container" >
            <div className="row">
                <div className="col-md-12">
                    <Title >Product</Title>
                </div>
            </div>
            <div className="row" >
                <div className="col-md-7 card" style={{marginRight: "15px"}} >
                    <ProductImg src={products[0].image} ></ProductImg>
                </div>
                <div className="col-md-4 card" >
                        <ProductItem>
                            <h1 className="product-name-item" >{products[0].name}</h1>
                            <p className="product-brand-item" >{products[0].brand}</p>
                        </ProductItem>
                    <div className="line" style={{display: "flex", justifyContent: "space-between"}}>
                        <ProductItemPrice>R${products[0].price}</ProductItemPrice>
                        <a href={`/editar/${products[0].id}`} className="btn btn-dark" style={{width: "100px",height: "45px", marginTop: "250px", display: "flex", alignItems: "center", justifyContent: "center"}} >Editar</a>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Product;