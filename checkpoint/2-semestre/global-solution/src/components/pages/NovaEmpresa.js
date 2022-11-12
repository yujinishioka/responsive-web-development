import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

import { NovoStyle } from '../../style/pages/novo';

const NovaEmpresa = () => {

    let { id } = useParams()
    let metodo = "post"

    if (id) {
        metodo = "put"
    }

    const [novo, setNovo] = useState({
        cnpj: "",
        razaoSocial: "",
        nomeFantasia: "",
        dataFundacao: ""
    })

    const handleChange = e => {
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`http://localhost:8080/GlobalSolution/rest/empresa/${ id ? id : "" }`,{
            method: metodo,
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/main/empresa"
        })
    }

    useEffect(() => {
        if(id) {
            fetch(`http://localhost:8080/GlobalSolution/rest/empresa/${id}`)
            .then((resp) => {
                return(resp.json())
            }).then(data => {
                setNovo(data)
            })
        }
    },[id])

    return (
        <NovoStyle className="container">
            <h2>Nova Empresa</h2>

            <form onSubmit={handleSubmit}>
                <label> 
                    <span>CNPJ:</span>
                    <input type="text" name="cnpj" value={novo.cnpj} placeholder='00.000.000/0000-00' required onChange={handleChange} className="input_text" />
                </label>

                <label> 
                    <span>Razão Social:</span>
                    <input type="text" name="razaoSocial" value={novo.razaoSocial} placeholder='A' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>Nome Fantasia:</span>
                    <input type="text" name="nomeFantasia" value={novo.nomeFantasia} placeholder='Empresa Feliz' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>Data Fundação:</span>
                    <input type="text" name="dataFundacao" value={novo.dataFundacao} placeholder='AAAA-MM-DD' required onChange={handleChange} className="input_text" />
                </label>

                <button className='btn btn-adicionar'>{id ? "Salvar" : "Adicionar"}</button>
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

export default NovaEmpresa;