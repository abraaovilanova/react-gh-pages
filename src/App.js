import React, {useState} from 'react'
import './App.css';
import { BsFillPeopleFill, BsFillPersonPlusFill} from "react-icons/bs"

// Componentes
import LinkCard from './components/LinkCard/LinkCard';
import PacienteForm from './components/PacienteForm/PacienteForm'
import Popup from './components/Popup/Popup';

function App() {
  const [showCreatePop, setShowCreatePop ] = useState(false)
  return (
    <div className="App">
      <h1>FitBox App</h1>

      <Popup trigger={showCreatePop} handleTrigger={setShowCreatePop} title="Novo paciente">
        <PacienteForm handleTrigger={setShowCreatePop} />
      </Popup> 

      <div className="cards">
        <LinkCard 
          mainText={'Lista de pacientes'}
          Icon={BsFillPeopleFill}
          onClick={''}
        />
        <LinkCard 
          mainText={'Novo paciente'}
          Icon={BsFillPersonPlusFill}
          handleClick={setShowCreatePop}
        />
      </div>
    </div>
  );
}

export default App;
