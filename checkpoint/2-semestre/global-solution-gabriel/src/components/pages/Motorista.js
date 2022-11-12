import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import {
    VisualizarStyle,
    Items,
    Field,
} from "../../style/pages/visualizar";
import { FaEdit, FaTrash } from 'react-icons/fa';

const Motorista = () => {

    const [motoristas, setMotoristas] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/GlobalSolution/rest/motorista')
            .then(response => response.json())
            .then(resp => {
                setMotoristas(resp)
            })
    })

    const handleDelete = (id) => {
        console.log("excluir")
        fetch(`http://localhost:8080/GlobalSolution/rest/empresa/${id}`, {
            method: "delete"
        }).then(() => {
            window.location = "/main/empresa"
        }).catch((error) => {
            console.log("Erro: ", error)
        })
    }

    return (
        <VisualizarStyle className='container'>
            <h2>Motorista</h2>

            <Items>
                {motoristas.map(motorista => {
                    return (
                        <Field key={motorista.idMotorista}>
                            <p><span>Nome:</span> {motorista.nome} {motorista.sobrenome}</p>
                            <p><span>CNH:</span> {motorista.cnh}</p>
                            <p><span>CPF:</span> {motorista.cpf}</p>
                            <p><span>RG:</span> {motorista.rg}</p>
                            <p><span>Idade:</span> {motorista.idade}</p>

                            <div className='opcoes'>
                                <div className='btn icon'>
                                    <Link to={`editar/${motorista.idMotorista}`} className="link"><FaEdit /></Link>
                                </div>
                                <button className='btn icon' onClick={handleDelete.bind(this, motorista.idMotorista)}><FaTrash /></button>
                            </div>
                        </Field>
                    )
                })}
            </Items>

            <div className="actions">
                <Link to="/main">
                    <button className='btn btn-voltar'>Voltar</button>
                </Link>

                <Link to="/">
                    <button className='btn btn-logout'>Logout</button>
                </Link>
            </div>

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