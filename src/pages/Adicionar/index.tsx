import React from 'react';
import {Title} from '../Main/styles';
import {ProductForm} from './styles';

// import { Container } from './styles';

const Adicionar: React.FC = () => {
  return (
    <main style={{backgroundColor: "#E9ECEC", height:"auto", paddingBottom: "280px", paddingTop: "30px"}} >
        <div className="container" >
            <div className="row">
                <div className="col-md-12">
                    <Title>Adicionar</Title>
                </div>
            </div>
            <div className="row" >
                <div className="col-md-6 card" style={{height: "300px", justifyContent: "center"}}>
                    <ProductForm>
                        <input className="form-control"  type="text" placeholder="Nome"/>
                        <input className="form-control"  type="text" placeholder="Categoria" />
                        <input className="form-control"  type="text" placeholder="Preço" />
                        <input className="form-control"  style={{marginBottom: "20px"}} type="text" placeholder="Marca"/>
                        <button className="btn btn-dark" >Adicionar</button>
                    </ProductForm>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Adicionar;