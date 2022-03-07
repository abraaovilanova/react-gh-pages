import React from 'react'
import { Routes, Route } from "react-router-dom"
import './App.css';



// Componentes
import NavBar from './components/Navbar/NavBar';

// Pages
import Home from './pages/Home/Home'
import Pacientes from './pages/Pacientes/Pacientes'
import Paciente from './pages/Paciente/Paciente'
import Estatistica from './pages/Estatistica/Estatistica'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/react-gh-pages" element={<Home />} />
        <Route path="/react-gh-pages/pacientes" element={<Pacientes />} />
        <Route path="/react-gh-pages/pacientes/:userId" element={<Paciente />} />
        <Route path="/react-gh-pages/estatistica" element={<Estatistica />} />
      </Routes>
    </div>
  );
}

export default App;
