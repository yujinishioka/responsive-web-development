import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaEdit, FaTrash } from "react-icons/fa"

const DivLista = styled.div`
    width: 70%;
    margin: auto;
    font-family: Arial;

    h1 {
        text-align: center;
    }

    a {
        text-decoration: none;
        padding: 10px 15px;
        margin-bottom: 20px;
        background-color: yellowgreen;
        color: white;
        display: inline-block;
    }

    table {
        width: 100%;
        margin: auto;
    }

    thead tr {
        background-color: darkblue;
        color: white;
    }

    thead tr th {
        padding: 10px;
    }

    tbody tr:nth-child(2n+2) {
        background: #ccc;
    }

    tbody tr td a {
        background: none;
        margin-bottom: 5px;
        color: blue;
    }

    tbody tr td button {
        background: none;
        border: none;
        color: red;
    }

    tfoot tr td {
        background: #333;
        text-align: center;
        color: white;
    }
`

const ListaProduto = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        fetch("rest/produto").then((resp) => {
            return resp.json();
        }).then((resp) => {
            setProdutos(resp);
            console.log(resp);
        }).catch((error) => {
            console.log(`erro: ${error}`);
        })
    }, [])

    const handleDelete = (id) => {
        fetch("/rest/produto/" + id, {
            method: "delete"
        }).then(() => {
            window.location = "/"
        }).catch((error) => {
            console.log(`erro: ${error}`)
        })
    }

    return (
        <DivLista>
            <h1>Lista de Produtos</h1>

            <Link to="/incluir">Inserir Produto</Link>

            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((produto) => (
                        <tr key={produto.codigo}>
                            <td>{produto.titulo}</td>
                            <td>R$ {produto.preco}</td>
                            <td>{produto.quantidade}</td>
                            <td>
                                <Link title="Editar" to={`/editar/${produto.codigo}`}>{FaEdit}</Link>
                                <button title="Excluir" onClick={handleDelete.bind(this, produto.codigo)}>{FaTrash}</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan = '4'>Produtos do Servidor</td>
                    </tr>
                </tfoot>
            </table>
        </DivLista>
    )
}

export default ListaProduto;