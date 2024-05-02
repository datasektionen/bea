import React from "react";
import { Link } from "react-router-dom";
import '../style/App.css';
function NavBar() {
    return(
        <nav className="nav">
            <Link className="links" to="/">Hem</Link>
            <Link className="links" to="/about">Om METAdorerna</Link>
            <Link className="links" to="/meta">META</Link>
            <Link className="links" to="/stadrutiner">Städrutiner</Link>
            <Link className="links" to="/schedule">Städschema</Link>
        </nav>
    )
}
export default NavBar;