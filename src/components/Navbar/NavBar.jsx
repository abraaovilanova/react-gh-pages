import { Link } from "react-router-dom"
// Icones
import { 
    FaBoxOpen
  } from "react-icons/fa"

import './Navbar.css'

export default () => {
    return (
        <div className="navbar">
            <h1><FaBoxOpen /> FitBox</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/pacientes">Pacientes</Link></li>
                <li><Link to="/estatistica">Estatistica</Link></li>
            </ul>
        </div>
    )
}