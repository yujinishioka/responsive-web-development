import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

import { NovoStyle } from "../../style/pages/novo";

const NovoMotorista = () => {

    let { id } = useParams()
    let metodo = "post"

    const [novo, setNovo] = useState({
        nome: "",
        sobrenome: "",
        cnh: "",
        cpf: "",
        rg: "",
        idade: ""
    })

    if (id) {
        metodo = "put"
    }

    const handleChange = e => {
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`http://localhost:8080/GlobalSolution/rest/motorista/${ id ? id : "" }`,{
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/main/motorista"
        })
    }

    useEffect(() => {
        if(id) {
            fetch(`http://localhost:8080/GlobalSolution/rest/motorista/${id}`)
            .then((resp) => {
                return(resp.json())
            }).then(data => {
                setNovo(data)
            })
        }
    },[id])


    return (
        <NovoStyle className='container'>
            <h2>Novo Motorista</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text" name="nome" value={novo.nome} placeholder='João' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>Sobrenome:</span>
                    <input type="text" name="sobrenome" value={novo.sobrenome} placeholder='da Silva' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>CNH:</span>
                    <input type="text" name="cnh" value={novo.cnh} placeholder='00000000000' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>CPF:</span>
                    <input type="text" name="cpf" value={novo.cpf} placeholder='000.000.000-00' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>RG:</span>
                    <input type="text" name="rg" value={novo.rg} placeholder='00.000.000-0' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>Idade:</span>
                    <input type="number" name="idade" value={novo.idade} placeholder='20' required onChange={handleChange} className="input_text" />
                </label>

                <button className='btn btn-adicionar'>{ id ? "Salvar" : "Adicionar" }</button>
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

export default NovoMotorista;