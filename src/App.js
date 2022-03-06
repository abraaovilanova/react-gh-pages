import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom"
import './App.css';



// Componentes
import NavBar from './components/Navbar/NavBar';

// Pages
import Home from './pages/Home/Home'
import Pacientes from './pages/Pacientes/Pacientes'
import Paciente from './pages/Paciente/Paciente'

function App() {
  const [showCreatePop, setShowCreatePop ] = useState(false)
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="pacientes" element={<Pacientes />} />
        <Route path="paciente" element={<Paciente />} />
      </Routes>
    </div>
  );
}

export default App;
