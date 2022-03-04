import './PacienteForm.css'

export default () => {
    return(
        <form className="pacienteform">
            <label>Nome:</label>
            <input type="text" />

            <label>Email:</label>
            <input type="email" />

            <label>Genero:</label>
            <select>
                <option>Masculino</option>
                <option>Feminino</option>
            </select>

            <label>Altura</label>
            <input type="number" />

            <label>Peso</label>
            <input type="number" />

            <label>Observação</label>
            <input type='text'/>

            <input className="form-btn" type="button" value="Adicionar"/>
            <input className="form-btn" type="button" value="Cancelar"/>
        </form>
    )
}