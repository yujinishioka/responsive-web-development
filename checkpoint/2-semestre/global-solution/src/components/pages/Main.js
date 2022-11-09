import { Link } from 'react-router-dom';
import { Block, MainStyle } from '../../style/pages/main.js'

const Main = () => {
    return (
        <MainStyle className='container'>
            <h2>Main</h2>

            <Block>
                <h3>Apresentação</h3>
            </Block>

            <Block>
                <h3>Empresa</h3>
                <p>Consultar suas empresas</p>
                <Link to="empresa">
                    <button className='btn btn-lg'>Ver Empresas</button>
                </Link>
                <p>Nova Empresa</p>
                <Link to="empresa/nova">
                    <button className='btn btn-lg'>Add +</button>
                </Link>
            </Block>

            <Block>
                <h3>Veículo</h3>
                <p>Consultar seus Veículos</p>
                <Link to="veiculo">
                    <button className='btn btn-lg'>Ver Veículos</button>
                </Link>
                <p>Novo Veículo</p>
                <Link to="veiculo/novo">
                    <button className='btn btn-lg'>Add +</button>
                </Link>
            </Block>

            <Block>
                <h3>Motorista</h3>
                <p>Consultar seus Motoristas</p>
                <Link to="motorista">
                    <button className='btn btn-lg'>Ver Motoristas</button>
                </Link>
                <p>Novo Motorista</p>
                <Link to="motorista/novo">
                    <button className='btn btn-lg'>Add +</button>
                </Link>
            </Block>

            <Link to="/">
                <button className='btn btn-sair'>Logout</button>
            </Link>
        </MainStyle>
    )
}

export default Main;