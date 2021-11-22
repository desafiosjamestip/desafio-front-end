import React from "react";
import { Link } from 'react-router-dom';
import './headerMain.css';
import Header from '../Header/header'

function HeaderMain() {
    return (

        <header>
            <div className="container">
                <div className="logo">
                    <Header />
                </div>

                <div className="btn-newPost">

                    <Link to="/post">
                        <button>Novo produto</button>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderMain