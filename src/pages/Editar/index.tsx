import React from 'react';
import {Title} from '../Main/styles';
import {ProductForm} from '../Adicionar/styles';
import {useParams} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';



const Editar: React.FC = () => {

    const [nomeProduto, setNomeProduto] = React.useState("");
    const [nomeFornecedor, setNomeFornecedor] = React.useState("");
    const [marca, setMarca] = React.useState("");
    const [categoria, setCategoria] = React.useState("");
    const [preco, setPreco] = React.useState("");
    const {id} = useParams();
    const navegacao = useHistory();

    const editar = () => {

        let produtos = JSON.parse(window.localStorage.getItem("produtos"));
        let produtoId = produtos.find((produto)=>{
            produto.id = id;
        });
        produtoId.nomeProduto = nomeProduto;
        produtoId.nomeFornecedor = nomeFornecedor;
        produtoId.marca = marca;
        produtoId.categoria = categoria;
        produtoId.preco = preco;

        produtos.push(produtoId);
        window.localStorage.setItem("produtos", JSON.stringify(produtos));
        navegacao.push("/");
    }

  return(
    <main style={{backgroundColor: "#E9ECEC", height:"auto", paddingBottom: "280px", paddingTop: "30px"}} >
        <div className="container" >
            <div className="row">
                <div className="col-md-12">
                    <Title>Editar</Title>
                </div>
            </div>
            <div className="row" >
                <div className="col-md-6 card" style={{height: "350px", justifyContent: "center", paddingBottom: "15px"}}>
                    <ProductForm>
                        <input className="form-control" onChange={(e)=>setNomeProduto(e.target.value)} value={nomeProduto} type="text" placeholder="Nome do produto"/>
                        <input className="form-control" onChange={(e)=>setNomeFornecedor(e.target.value)} value={nomeFornecedor}  type="text" placeholder="Nome do fornecedor"/>
                        <input className="form-control" onChange={(e)=>setCategoria(e.target.value)} value={categoria}  type="text" placeholder="Categoria" />
                        <input className="form-control"  type="text" onChange={(e)=>setPreco(e.target.value)} value={preco} placeholder="Preço" />
                        <input className="form-control"  style={{marginBottom: "20px"}} type="text" onChange={(e)=>setMarca(e.target.value)} value={marca} placeholder="Marca"/>
                        <button className="btn btn-dark" onClick={editar} >Editar</button>
                    </ProductForm>
                </div>
            </div>
        </div>
    </main>
  );
}

export default Editar;