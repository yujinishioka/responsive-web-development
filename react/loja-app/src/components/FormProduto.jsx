import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivForm = styled.div`
    width: 70%;
    margin: auto;
    font-family: Arial;

    h1 {
        text-align: center;
    }

    form {
        width: 80%;
        margin: auto;
    }

    form input {
        width: 100%;
        padding: 5px;
        margin-bottom: 5px;
    }

    a {
        margin-bottom: 5px;
        padding: 5px;
        background: red;
        color: white;
        text-decoration: none;
    }

    button {
        margin-right: 10px;
        padding: 6px;
        background: green;
        color: white;
        border: none;
        display: inline-block;
    }
`

const FormProduto = (props) => {

    let id = null;

    if(props.match.path.toLowerCase().includes('editar')) {
        id = props.match.params.id;
    }

    const [novo, setNovo] = useState({
        codigo: id,
        titulo: "",
        preco: "",
        quantidade: ""
    })

    let metodo = "post"

    if(id) {
        metodo = "put"
    }

    const handleChange = e => {
        setNovo({...novo, [e.target.name]: e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()

        fetch("rest/produto/" + (id ? id : ""), {
            method: metodo,

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/"
        })
    }

    useEffect(() => {
        if(id) {
            fetch("/rest/produto/" + id)
            .then(resp => {
                return(resp.json())
            }).then(data => {
                setNovo(data)
            })
        }
    }, [id])

    return (
        <DivForm>
            <h1>Formulário Produtos</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="titulo" value={novo.titulo} placeholder="Titulo" onChange={handleChange} /><br />
                <input type="number" name="preco" value={novo.preco} placeholder="Preço" onChange={handleChange} step="0.01" /><br />
                <input type="number" name="quantidade" value={novo.quantidade} placeholder="Quantidade" onChange={handleChange} /><br />
                <button type="submit">Enviar</button>
                <Link to="/">Cancelar</Link>
            </form>
        </DivForm>
    )
}

export default FormProduto