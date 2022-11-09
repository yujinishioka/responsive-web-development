import { Link } from 'react-router-dom';
import { 
    EmpresaStyle, 
    Items, 
    Field, 
    } from '../../style/pages/empresa.js'

const Empresa = () => {
    let items = [[1, 'Sioux', 'teste'], [2, 'FIAP', 'teste']]

    let itemList = items.map((item, index) => {
        return <>
            <Field key={index}>
                <p>ID: {item[0]}</p>
                <p>Nome: {item[1]}</p>
                <p>Descricao: {item[2]}</p>
            </Field>
        </>
    })

    return (
        <EmpresaStyle className='container'>
            <h2>Empresa</h2>

            <Items>
                {itemList}
            </Items>

            <Link to="/main">
                <button className='btn btn-voltar'>Voltar</button>
            </Link>
        </EmpresaStyle>
    )
}

export default Empresa;