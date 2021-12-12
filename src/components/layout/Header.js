import React from "react";
import {Link} from "react-router-dom"

function Header(){ //react 에서는 class가 아닌 className을 쓰고 a 말고 Link를 씀.
    return(
        <header id="header">
        <div className="header__port"><Link to="/portfolio">Portfolio</Link></div>
        <div className="header__logo"><Link to="/">YUMI JJANG</Link></div>
        <nav className="header__menu">
            <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/reference">Reference</Link></li>
                <li><Link to="/script">Script</Link></li>
                <li><Link to="/youtube">Youtube</Link></li>
            </ul>
            <div href="#" className="ham">
                <span className="sr-only">menu</span>
            </div>
        </nav>
    </header>
    )
}

export default Header;