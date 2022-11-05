import { Link } from 'react-router-dom';
import { VeiculoStyle } from '../../style/pages/veiculo.js'

const Veiculo = () => {
    return (
        <VeiculoStyle className='container'>
            <h2>Veiculo</h2>

            <Link to="/main">
            <button className='btn btn-voltar'>Voltar</button>
            </Link>
        </VeiculoStyle>
    )
}

export default Veiculo;