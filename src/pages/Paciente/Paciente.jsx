import { useLocation, useParams } from "react-router-dom"

export default () => {
    const params = useParams();
    console.log(params)
    return (
        <div>
            <h1>{params.userId} * Idade * Altura * Peso * IMC</h1>
            <ul>
                <li>Nova Avaliação</li>
                <li>Histórico</li>
            </ul>
        </div>
    )
}