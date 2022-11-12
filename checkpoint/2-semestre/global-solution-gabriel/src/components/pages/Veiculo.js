import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { VisualizarStyle, Items, Field } from '../../style/pages/visualizar.js';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Veiculo = () => {
    const [veiculos, setVeiculos] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/GlobalSolution/rest/carro')
            .then(response => response.json())
            .then(resp => {
                setVeiculos(resp)
            })
    })

    const handleDelete = (id) => {
        console.log("excluir")
        fetch(`http://localhost:8080/GlobalSolution/rest/carro/${id}`,{
            method: "delete"
        }).then(() => {
            window.location = "/main/veiculo"
        }).catch((error) => {
            console.log("Erro: ", error)
        })
    }

    return (
        <VisualizarStyle className='container'>
            <h2>Veículo</h2>

            <Items>
                {veiculos.map(veiculo => {
                    return (
                        <Field key={veiculo.idCarro}>
                            <p><span>Marca:</span> {veiculo.marca}</p>
                            <p><span>Modelo:</span> {veiculo.modelo}</p>
                            <p><span>Ano:</span> {veiculo.ano}</p>
                            <p><span>Data Registro:</span> {new Date(veiculo.dataRegistro).toLocaleDateString('pt-br')}</p>
                            <div className='opcoes'>
                                <div className='btn icon'>
                                    <Link to={`editar/${veiculo.idCarro}`} className="link"><FaEdit/></Link>
                                </div>
                                <button className='btn icon' onClick={handleDelete.bind(this, veiculo.idCarro)}><FaTrash /></button>
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

export default Veiculo;