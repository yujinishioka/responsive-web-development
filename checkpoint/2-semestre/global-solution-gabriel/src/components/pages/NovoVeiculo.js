import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';

import { NovoStyle } from '../../style/pages/novo';

const NovoVeiculo = () => {

    let {id} = useParams()

    const [novo, setNovo] = useState({
        marca: "",
        modelo: "",
        ano: "",
        dataRegistro: ""
    })

    const handleChange = e => {
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('http://localhost:8080/GlobalSolution/rest/carro/',{
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            // window.location = "/main/empresa"
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

    // function salvar() {
    //     let cnpj = document.getElementById("cnpjForm").value;
    //     let razaoSocial = document.getElementById("razaoSocialForm").value;
    //     let nomeFantasia = document.getElementById("nomeFantasiaForm").value;
    //     let dataFundacao = document.getElementById("dataFundacaoForm").value;

    //     if (!cnpj || !razaoSocial || !nomeFantasia || !dataFundacao ) {
    //         alert("Preencha todos os campos para adicionar uma nova empresa.");
    //         return;
    //     } else {
    //         let novaEmpresa = {cnpj: cnpj, razaoSocial: razaoSocial, nomeFantasia: nomeFantasia, dataFundacao: dataFundacao}
    //         console.log(novaEmpresa)
    //         return;
    //     }
    // }

    return (
        <NovoStyle className="container">
            <h2>Novo Veículo</h2>

            <form onSubmit={handleSubmit}>
                <label for="idEmpresa"> 
                    <span> ID Empresa: </span>
                    <input type="text" id="cnpjForm" value={novo.cnpj} placeholder='00.000.000/0000-00' required onChange={handleChange} className="input_text"/>
                </label>

                <label for="marca"> 
                    <span> Marca: </span>
                    <input type="text" id="marca" value={novo.marca} placeholder='A' required onChange={handleChange} className="input_text"/>
                </label>

                <label for="modelo"> 
                    <span> Modelo: </span>
                    <input type="text" id="modelo" value={novo.modelo} placeholder='Empresa Feliz' required onChange={handleChange} className="input_text"/>
                </label>

                <label for="ano"> 
                    <span> Ano: </span>
                    <input type="text" id="ano" value={novo.ano} placeholder='01/01/2022' required onChange={handleChange} className="input_text"/>
                </label>

                <label for="dataRegistro"> 
                    <span> Data Registro: </span>
                    <input type="text" id="dataRegistro" value={novo.dataRegistro} placeholder='01/01/2022' required onChange={handleChange} className="input_text"/>
                </label>

                <button className='btn btn-adicionar'>Adicionar</button>
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