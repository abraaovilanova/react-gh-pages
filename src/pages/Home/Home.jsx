import React, { useState } from 'react'

import { 
    BsFillPeopleFill, 
    BsFillPersonPlusFill,
    BsFillBarChartFill
  } from "react-icons/bs"

  // Componentes
import LinkCard from '../../components/LinkCard/LinkCard';
import PacienteForm from '../../components/PacienteForm/PacienteForm'
import Popup from '../../components/Popup/Popup';
import PacienteList from '../../components/PacienteList/PacienteList';
import { Routes, Route, Link } from "react-router-dom";
 
export default () => {
    const [showCreatePop, setShowCreatePop ] = useState(false)

    return (
        <div className="home">
            <Popup trigger={showCreatePop} handleTrigger={setShowCreatePop} title="Novo paciente">
                <PacienteForm handleTrigger={setShowCreatePop} />
            </Popup> 

            <div className="cards">
                <Link to="/pacientes">
                    <LinkCard 
                        mainText={'Meus pacientes'}
                        Icon={BsFillPeopleFill}
                        onClick={''}
                    />
                </Link>
                <LinkCard 
                mainText={'Novo paciente'}
                Icon={BsFillPersonPlusFill}
                handleClick={setShowCreatePop}
                />
                <LinkCard 
                mainText={'Estatistica'}
                Icon={BsFillBarChartFill}
                handleClick={''}
                />
            </div>
        </div>
    )
}