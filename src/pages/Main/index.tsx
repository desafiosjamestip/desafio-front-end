import React from 'react';
import {Product, Title} from './styles';
import Modal from '../Modal';
import AppContext from '../../AppContext';

// import { Container } from './styles';

const Main: React.FC = () => {

  const AppData = React.useContext(AppContext);

  const [productsStorage, setProductsStorage] = React.useState(null);

  React.useEffect(()=>{
    setProductsStorage(AppData.produtos);
  }, []);

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

  return (
    <>
      <main style={{backgroundColor: "#E9ECEC", height:"auto"}} >
                <div className="container" style={{paddingTop: "30px", paddingBottom: "30px"}}>
                    <div className="row">
                        <div className="col-md-12">
                            <Title >Products</Title>
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {/* <button className="btn btn-dark"><a href="/adicionar" style={{color: "white", textDecoration: "none"}} >Adicionar</a></button> */}
                        <button type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">Adicionar</button>
                      </div>
                    </div>
                    <div className="row" style={{ marginTop: "15px"}} >
                        {products.map((product,index)=>(
                            <Product >
                                <img src={product.image} className="product-img" />
                                <a href={`/product/${index}`} className="product-name" >{product.name}</a>
                                <p className="product-price" >R$ {product.price}</p>
                            </Product>
                        ))}
                        {productsStorage !== null && productsStorage.map((product,index)=>(
                            <Product >
                                <img src={product.image} className="product-img" />
                                <a href={`/product/${index}`} className="product-name" >{product.name}</a>
                                <p className="product-price" >R$ {product.price}</p>
                            </Product>
                        ))}
                    </div>
                </div>
            </main>
            <Modal/>
    </>
  );
}

export default Main;

