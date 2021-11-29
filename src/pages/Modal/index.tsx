import React from 'react';
import {ProductForm} from '../Adicionar/styles';
import { useHistory } from 'react-router-dom';

// import { Container } from './styles';

interface product{
    productId: Number;
    nomeProduto: String;
    nomeFornecedor: String;
    marca: String;
    categoria: String;
    preco: Number;
}

const Modal: React.FC = () => {

    const [nomeProduto, setNomeProduto] = React.useState("");
    const [productId, setProductId] = React.useState(0);
    const [nomeFornecedor, setNomeFornecedor] = React.useState("");
    const [marca, setMarca] = React.useState("");
    const [categoria, setCategoria] = React.useState("");
    const [preco, setPreco] = React.useState(0);
    const navegacao = useHistory();

    const adicionar = () => {
        let produto: product = {
            productId,
            nomeProduto,
            nomeFornecedor,
            marca,
            categoria,
            preco
        }

        if(window.localStorage.getItem("produtos") === null){
            let produtos = [];
            produtos.push(produto);
            window.localStorage.setItem("produtos",JSON.stringify(produtos));
        }

        let produtos = JSON.parse(window.localStorage.getItem("produtos"));

        produtos.push(produto);

        window.localStorage.setItem("produtos",JSON.stringify(produtos));
        
        navegacao.push("/");
    }


  return (
    <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Adicionar Produto</h5>
                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" /> */}
            </div>
            <div className="modal-body" style={{paddingBottom: "25px"}}>
                    <ProductForm>
                        <input className="form-control" onChange={(e)=>setProductId(parseInt(e.target.value))} value={nomeProduto} type="text" placeholder="Nome do produto"/>
                        <input className="form-control" onChange={(e)=>setNomeProduto(e.target.value)} value={nomeProduto} type="text" placeholder="Nome do produto"/>
                        <input className="form-control" onChange={(e)=>setNomeFornecedor(e.target.value)} value={nomeFornecedor}  type="text" placeholder="Nome do fornecedor"/>
                        <input className="form-control" onChange={(e)=>setCategoria(e.target.value)} value={categoria}  type="text" placeholder="Categoria" />
                        <input className="form-control"  type="text" onChange={(e)=>setPreco(parseInt(e.target.value))} value={preco} placeholder="Preço" />
                        <input className="form-control"  style={{marginBottom: "20px"}} type="text" onChange={(e)=>setMarca(e.target.value)} value={marca} placeholder="Marca"/>
                    </ProductForm>
            </div>
            <div className="modal-footer">
                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
                <button type="button" className="btn btn-dark">Adicionar</button>
            </div>
            </div>
        </div>
    </div>

  );
}

export default Modal;