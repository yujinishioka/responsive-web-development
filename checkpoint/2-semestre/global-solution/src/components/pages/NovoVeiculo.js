import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

import { NovoStyle } from '../../style/pages/novo';

const NovoVeiculo = () => {

    let { id } = useParams()
    let metodo = "post"

    if (id) {
        metodo = "put"
    }

    const [novo, setNovo] = useState({
        idEmpresa: "",
        marca: "",
        modelo: "",
        ano: ""
    })

    const handleChange = e => {
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`http://localhost:8080/GlobalSolution/rest/carro/${ id ? id : "" }`,{
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            console.log()
            window.location = "/main/veiculo"
        })
    }

    useEffect(() => {
        if(id) {
            fetch(`http://localhost:8080/GlobalSolution/rest/carro/${id}`)
                .then((resp) => {
                    return(resp.json())
                }).then(data => {
                    console.log(data);
                    setNovo(data)
                })
        }
    },[id])

    return (
        <NovoStyle className="container">
            <h2>Novo Veículo</h2>

            <form onSubmit={handleSubmit}>
                <label> 
                    <span> ID Empresa: </span>
                    <input type="text" name="idEmpresa" value={novo.idEmpresa} placeholder='1' required onChange={handleChange} className="input_text"/>
                </label>

                <label> 
                    <span> Marca: </span>
                    <input type="text" name="marca" value={novo.marca} placeholder='Fiat' required onChange={handleChange} className="input_text"/>
                </label>

                <label> 
                    <span> Modelo: </span>
                    <input type="text" name="modelo" value={novo.modelo} placeholder='Uno' required onChange={handleChange} className="input_text"/>
                </label>

                <label> 
                    <span> Ano: </span>
                    <input type="text" name="ano" value={novo.ano} placeholder='2010' required onChange={handleChange} className="input_text"/>
                </label>

                <button className='btn btn-adicionar'>{ id ? "Salvar" : "Adicionar"}</button>
            </form>

            <hr/>

            <Link to="/main">
                <button className='btn btn-voltar'>Voltar</button>
            </Link>

            <Link to="/">
                <button className='btn btn-logout'>Logout</button>
            </Link>
        </NovoStyle>
    )
}

export default NovoVeiculo;