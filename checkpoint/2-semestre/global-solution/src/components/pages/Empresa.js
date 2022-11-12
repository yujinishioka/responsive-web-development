import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import { 
    VisualizarStyle, 
    Items, 
    Field, 
} from '../../style/pages/visualizar'
import { FaEdit, FaTrash } from 'react-icons/fa';

const Empresa = () => {

    const [empresas, setEmpresas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/GlobalSolution/rest/empresa')
            .then(response => response.json())
            .then(resp => {
                setEmpresas(resp)
            }).catch((error) => {
                console.log("Erro:", error)
            })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/GlobalSolution/rest/empresa/${id}`,{
            method: "delete"
        }).then(() => {
            window.location = "/main/empresa"
        }).catch((error) => {
            console.log("Erro: ", error)
        })
    }

    return (
        <VisualizarStyle className='container'>
            <h2>Empresa</h2>

            <Items>
                {empresas.map(empresa => {
                    return (
                        <Field key={empresa.idEmpresa}>
                            <p><span>CNPJ:</span> {empresa.cnpj}</p>
                            <p><span>Razão Social:</span> {empresa.razaoSocial}</p>
                            <p><span>Nome </span> {empresa.nomeFantasia}</p>
                            <p><span>Data Fundação</span> {new Date(empresa.dataFundacao).toLocaleDateString('pt-br')}</p>
                            <p><span>Data Registro</span> {new Date(empresa.dataRegistro).toLocaleDateString('pt-br')}</p>
                            <div className='opcoes'>
                                <div className='btn icon'>
                                    <Link to={`editar/${empresa.idEmpresa}`} className="link"><FaEdit/></Link>
                                </div>
                                <button className='btn icon' onClick={handleDelete.bind(this, empresa.idEmpresa)}><FaTrash /></button>
                            </div>
                        </Field>
                    )
                })}
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