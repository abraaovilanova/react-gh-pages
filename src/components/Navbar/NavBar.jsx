import { Link } from "react-router-dom"
// Icones
import { 
    FaBoxOpen
  } from "react-icons/fa"

import './Navbar.css'

export default () => {
    return (
        <nav className="navbar">
            <FaBoxOpen /> FitBox
            <ul className="navbar-itens">
                <li><Link to="react-gh-pages/">Home</Link></li>
                <li><Link to="react-gh-pages/pacientes">Pacientes</Link></li>
                <li><Link to="react-gh-pages/estatistica">Estatistica</Link></li>
            </ul>
        </nav>
    )
}