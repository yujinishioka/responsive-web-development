import { Link } from 'react-router-dom';
import { NovaEmpresaStyle } from "../../style/pages/novaEmpresa"

const NovaEmpresa = () => {
    return (
        <NovaEmpresaStyle className="container">
            <h2>Nova Empresa</h2>

            <Link to="/main">
            <button className='btn btn-voltar'>Voltar</button>
            </Link>
        </NovaEmpresaStyle>
    )
}

export default NovaEmpresa;