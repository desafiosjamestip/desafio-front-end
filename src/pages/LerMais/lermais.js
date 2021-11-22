import React from "react";
import Header from "../../componentes/Header/header";
import { Link } from "react-router-dom";
import Seta from "../../images/seta-atributo.png";

function Lermais() {
  return (
    <div>
      <Header />
      <h1 style={{ padding: "1rem 0", color: "#ffffff" }}>Page LerMais</h1>
      <main>
        <div className="cards">
          <div className="card">
            <header>
              <h2>Produto</h2>
              <img src={Seta} />
            </header>

            <div className="line"></div>
            <p>Cadastrar produto</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Lermais;
