import React from "react";
import { Link } from 'react-router-dom';
import '../HeaderMain/HeaderMain';
import Logo from "../../images/Logo-Pequeno.svg"

function Header() {
    return (

        <header>
            <div className="container">
                    <Link to="/">
                        <img src={Logo} style={{width: '150px'}} />
                    </Link>

            </div>
        </header>
    )
}

export default Header