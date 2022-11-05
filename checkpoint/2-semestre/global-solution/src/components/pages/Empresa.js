import { Link } from 'react-router-dom';
import { EmpresaStyle } from '../../style/pages/empresa.js'

const Empresa = () => {
    return (
        <EmpresaStyle className='container'>
            <h2>Empresa</h2>

            <Link to="/main">
                <button className='btn btn-voltar'>Voltar</button>
            </Link>
        </EmpresaStyle>
    )
}

export default Empresa;