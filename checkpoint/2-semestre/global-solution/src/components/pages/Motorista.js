import { Link } from 'react-router-dom';
import { 
    VisualizarStyle, 
    Items, 
    Field, 
} from "../../style/pages/visualizar";

const Motorista = () => {
    let items = [['Leandro', 'Silva', '00000000000', '000.000.000-00', '00.000.000-0', 20], ['Leandro', 'Silva', '00000000000', '000.000.000-00', '00.000.000-0', 20]]

    let itemList = items.map((item, index) => {
        return <>
            <Field key={index}>
                <p>Nome: {item[0]} {item[1]}</p>
                <p>CNH: {item[2]}</p>
                <p>CPF: {item[3]}</p>
                <p>RG: {item[4]}</p>
                <p>Idade: {item[5]}</p>
            </Field>
        </>
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
        </VisualizarStyle>
    )
}

export default Motorista;