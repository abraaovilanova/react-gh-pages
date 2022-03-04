import React, {useState} from 'react'
import './PacienteForm.css'

export default ({ handleTrigger }) => {
    const [user, setUser] = useState({
        nome:'',
        email:'',
        genero:'',
        altura:'',
        peso:'',
        observacao:'',
    })
  
    return(
        <form className="pacienteform">
            <label htmlFor="nome">Nome:</label>
            <input 
                id="nome" 
                type="text"
                value={user.nome} 
                onChange={(e)=>{
                    setUser({...user, name: e.target.value })
                }}
            />

            <label htmlFor='email'>Email:</label>
            <input 
                id="email" 
                type="email"
                value={user.email}
                onChange={(e)=>{
                    setUser({...user, email: e.target.value })
                }} 
            />

            <label htmlFor='genero'>Genero:</label>
            <select 
                id='genero'
                onChange={(e)=>{
                    setUser({...user, genero: e.target.value })
                }}
                value={user.genero}
            >
                <option value=""></option>
                <option value="masculino">Masculino</option>
                <option value="feminino">Feminino</option>
            </select>

            <label htmlFor='altura'>Altura(cm):</label>
            <input
                id='altura' 
                type="number"
                value={user.altura}
                onChange={(e)=>{
                    setUser({...user, altura: e.target.value })
                }}
            />

            <label htmlFor='peso'>Peso(kg):</label>
            <input 
                type="number" 
                value={user.peso}
                onChange={(e)=>{
                    setUser({...user, peso: e.target.value })
                }}
            />

            <label htmlFor='observacao'>Observação:</label>
            <input 
                type='text'
                value={user.observacao}
                onChange={(e)=>{
                    setUser({...user, observacao: e.target.value })
                }}
            />

            <input
                onClick={()=>console.log(user)}
                className="form-btn" type="button" value="Adicionar"
            />
            <input 
                onClick={()=>handleTrigger(false)}
                className="form-btn" type="button" value="Cancelar"/>
        </form>
    )
}