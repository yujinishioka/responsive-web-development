import { Link } from 'react-router-dom';
import { NovoStyle } from '../../style/pages/novo';

const NovoVeiculo = () => {
    return (
        <NovoStyle className="container">
            <h2>Novo Veículo</h2>

            <Link to="/main">
            <button className='btn btn-voltar'>Voltar</button>
            </Link>
        </NovoStyle>
    )
}

export default NovoVeiculo;