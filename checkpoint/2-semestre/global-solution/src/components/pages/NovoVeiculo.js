import { Link } from 'react-router-dom';
import { NovoVeiculoStyle } from "../../style/pages/novoVeiculo"

const NovoVeiculo = () => {
    return (
        <NovoVeiculoStyle className="container">
            <h2>Novo Veículo</h2>

            <Link to="/main">
            <button className='btn btn-voltar'>Voltar</button>
            </Link>
        </NovoVeiculoStyle>
    )
}

export default NovoVeiculo;