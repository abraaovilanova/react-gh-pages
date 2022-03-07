import './PacienteList.css'
import { Link } from "react-router-dom"
export default ({ listTitle }) => {

    const mockPacientes = [
        {nome: "Abraão",idade:27, email:"abraao@email.com", genero:"masculino", altura:173, peso:73, observacao:"infarto"},
        {nome: "Ana",idade:26, email:"ana@email.com", genero:"feminino", altura:165, peso:78, observacao:"Ansiedade"},
        {nome: "Lucas",idade:26, email:"lucas@email.com", genero:"masculino", altura:185, peso:90, observacao:"Ansiedade"},
        {nome: "João",idade:33, email:"joao@email.com", genero:"masculino", altura:172, peso:114, observacao:"Compusão alimentar"},
        {nome: "Luana",idade:37, email:"luana@email.com", genero:"feminino", altura:165, peso:120, observacao:"Compusão alimentar"},

    ]

    const geraItensLista = (dataList) => {
        return(
            dataList.map(elem=>{
                return(
                    <Link  to={`${elem.nome}`}>
                        <li className="pacienteslist-list__item">
                            <div className="paciente__icon">{elem.nome[0]}</div>
                            <span>{elem.nome}</span>
                        </li>
                    </Link>
                )
            })
        ) 
    }


    return (
        <div className="pacienteslist">
            <h1>{listTitle}</h1>
            <ul className="pacienteslist-list">
                {geraItensLista(mockPacientes)}
            </ul>

        </div>
    )
}