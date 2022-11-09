import { Link } from 'react-router-dom';
import { 
    VisualizarStyle, 
    Items, 
    Field, 
    } from '../../style/pages/visualizar'

const Empresa = () => {
    let items = [{id: 1, cnpj: '00.000.000/0000-00', razaoSocial: 'A', nomeFantasia: 'Sioux', dataFundacao: '11/03/1997'}, 
                {id: 2, cnpj: '11.111.111/1111-11', razaoSocial: 'B', nomeFantasia: 'Fiap', dataFundacao: '21/07/2002'}];

    let itemList = items.map((item, index) => {
        return <Field key={index}>
            <p>CNPJ: {item.cnpj}</p>
            <p>Razão Social: {item.razaoSocial}</p>
            <p>Nome Fantasia: {item.nomeFantasia}</p>
            <p>Data de Fundação: {item.dataFundacao}</p>
        </Field>
    });

    return (
        <VisualizarStyle className='container'>
            <h2>Empresa</h2>

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

export default Empresa;