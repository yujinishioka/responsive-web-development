import { Link } from 'react-router-dom';
import { VisualizarStyle } from '../../style/pages/visualizar.js';

const Veiculo = () => {
    return (
        <VisualizarStyle className='container'>
            <h2>Veiculo</h2>

            <Link to="/main">
            <button className='btn btn-voltar'>Voltar</button>
            </Link>
        </VisualizarStyle>
    )
}

export default Veiculo;