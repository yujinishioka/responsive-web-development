import { Link } from 'react-router-dom';
import { 
    VisualizarStyle, 
    Items, 
    Field, 
} from "../../style/pages/visualizar";

const Motorista = () => {
    let items = [{idMotorista: 1, nome: 'Leandro', sobrenome: 'da Silva', cnh: '00000000000', cpf: '000.000.000-00', rg: '00.000.000-0', idade: 20}, {idMotorista: 2, nome: 'Leandro', sobrenome: 'da Silva', cnh: '00000000000', cpf: '000.000.000-00', rg: '00.000.000-0', idade: 20}]

    let itemList = items.map((item, index) => {
        return <Field key={index}>
            <p>Nome: {item.nome} {item.sobrenome}</p>
            <p>CNH: {item.cnh}</p>
            <p>CPF: {item.cpf}</p>
            <p>RG: {item.rg}</p>
            <p>Idade: {item.idade}</p>
        </Field>
    })

    return (
        <VisualizarStyle className='container'>
            <h2>Motorista</h2>

            <Items>
                {itemList}
            </Items>

            <Link to="/main">
                <button className='btn btn-voltar'>Voltar</button>
            </Link>

            <Link to="/">
                <button className='btn btn-logout'>Logout</button>
            </Link>
        </VisualizarStyle>
    )
}

export default Motorista;