import { useEffect, useState } from "react"
import { useParams, Link} from "react-router-dom"
import styled from 'styled-components'
import { FaLocationArrow, FaRegTimesCircle } from "react-icons/fa"

const DivForm = styled.div `
    width: 70%;
    margin: auto;
    font-family: Arial;
    h1{
        text-align: center;
    }
    form{
        width: 80%;
        margin: auto;
    }
    form input{
        width: 100%;
        padding: 5px;
        margin-bottom: 5px;
    }
    a{
        background: red;
        margin-bottom: 5px;
        color: white;
        text-decoration: none;
        padding: 5px;
    }
    button{
        color:white;
        background:green;
        border: none;
        display: inline-block;
        padding: 6px;
        margin-right: 10px;
    }

`

export default function FormVagas(){
    
    
    let {id} = useParams()

    const [novo, setNovo] = useState({
        codigo:id,
        titulo:"",
        numeroDeVagas:"",
        descricao:""
    })

    let metodo = "post"

    if(id){
        metodo = "put"
    }

    const handleChange = e =>{
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handeSubmit = e => {
        e.preventDefault()

        fetch(`http://localhost:8080/ColorFilter/rest/vaga/${id ? id : ""}` ,{
            method: metodo, 
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/"
        })
    }

    useEffect(() => {
        if(id){
            fetch(`http://localhost:8080/ColorFilter/rest/vaga/${id}`)
            .then((resp)=>{
                return(resp.json())
            }).then(data=>{
                setNovo(data)
            })
        }
    })
    
    return(
        <DivForm>
            <h1>FormVagas</h1>
            <form onSubmit={handeSubmit}>
                <input type="text" name="titulo" value={novo.titulo} placeholder="Título" onChange={handleChange}/>
                <br/>
                <input type="text" name="preco" value={novo.numeroDeVagas} placeholder="Número de Vagas" onChange={handleChange} step="0.01"/>
                <br/>
                <input type="text" name="descricao" value={novo.descricao} placeholder="Descrição" onChange={handleChange}/>
                <br/>
                <button type="submit"><FaLocationArrow/></button>
                <Link to="/"><FaRegTimesCircle/></Link>
            </form>
        </DivForm>
    )
}