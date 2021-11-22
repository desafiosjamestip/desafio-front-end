import React from "react";
import { Link } from "react-router-dom";
import HeaderMain from "../../componentes/HeaderMain/HeaderMain";
import Seta from "../../images/seta-atributo.png";
import "./feed.css";

function Feed() {
  return (
    <div>
      <HeaderMain />

      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Contrate os nosso produtos</h2>
              <img src={Seta} />
            </header>

            <div className="line"></div>
            <p>Cadastrar produto</p>

            <h3>Código do Produto</h3>
            <input></input>

            <h3>Categoria do Produto </h3>
            <input></input>

            <h3>Nome do Produto</h3>
            <input></input>

            <h3>Nome do Fornecedor</h3>
            <input type="text"></input>

            <h3>Valor do Produto</h3>
            <input type="number"></input>

            <div className="btns">
              <div className="btn-edit">
                <Link to="/edit">
                  <button>Corrigir</button>
                </Link>
              </div>
              <div className="btn-readmore">
                <Link to="/lermais">
                  <button>Cadastrar</button>
                </Link>
              </div>
              <div className="btn-delete">
                <button>Cancelar</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Feed;
