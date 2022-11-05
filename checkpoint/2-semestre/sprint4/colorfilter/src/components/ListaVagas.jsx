import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {FaEdit, FaTrash} from 'react-icons/fa'

const DivLista = styled.div `
    width: 70%;
    margin: auto;
    font-family: Arial;
    h1{
        text-align:center;
    }
    a{
        text-decoration:none;
        padding: 10px 15px;
        margin-bottom: 20px;
        background-color: yellowgreen;
        color: white;
        display: inline-block;
    }
    table{
        width: 100%;
        margin: auto;
    }
    thead tr{
        background-color: darkblue;
        color: white;
    }
    thead tr th{
        padding:10px;
    }
    tbody tr:nth-child(2n+2) {
        background: #ccc;
    }
    tbody tr td a{
        background: none;
        margin-bottom: 5px;
        color: blue;
    }
    tbody tr td button{
        color: red;
        background:none; 
        border: none;
    }
    tfoot tr td{
        text-align: center;
        background:#333;
        color:white;
    }
`

export default function ListaVagas(){

    const [vaga, setVaga] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/ColorFilter/rest/vaga").then((resp)=>{
            return resp.json()
        }).then((resp)=>{
            setVaga(resp)
        }).catch((error) =>{
            console.log(error)
        })
    }, [])

    const handDelete =(id)=>{
        fetch(`http://localhost:8080/ColorFilter/rest/vaga;${id}`,{
            method:"delete"
        }).then(()=>{
            window.location= "/"
        }).catch((error)=>{
            console.log(error)
        })
    }


    return(
        <DivLista>
            <h1>Lista de Vagas</h1>

            <Link to="/incluir">Inserir Produto</Link>
            <table>
                <thead>
                    <tr>
                        <th>Vaga</th><th>Número de vagas</th><th>descrição</th><th></th>
                    </tr>
                </thead>
                <tbody>
                    {vaga.map((vaga)=> (
                        <tr key={vaga.codigo}>
                            <td>{vaga.titulo}</td>
                            <td>{vaga.numeroDeVagas}</td>
                            <td>{vaga.descricao}</td>
                            <td>
                                <Link to={`/editar/${vaga.codigo}`}><FaEdit/></Link>
                                <button onClick={handDelete.bind(this, vaga.codigo)}><FaTrash/></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot><tr><td colSpan='4'>Vagas do servidor</td></tr></tfoot>
            </table>
        </DivLista>
    )
}