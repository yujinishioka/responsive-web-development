import { useState } from 'react'
import styled from 'styled-components'
import Formulario from './Formulario'
import Tarefa from './Tarefa'

const DivListaTarefas = styled.div`
    width: 100%;
    min-height: 85vh;
    padding: 20px;
    background-color: #ccc;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`

const ListaTarefas = () => {
    const [tarefa, setTarefa] = useState([{
            titulo: 'Checkpoint de Software & Design',
            data: '19/09',
            descricao: 'Diagrama de Classe',
        }, {
            titulo: 'Checkpoint de IA & Chatbot',
            data: '25/09',
            descricao: 'Colab',
        }
    ])

    const [novaTarefa, setNovaTarefa] = useState({
        titulo: '', data: '', descricao: ''
    })

    const addTarefa = e => {
        e.preventDefault()
        setTarefa([...tarefa, novaTarefa])
        setNovaTarefa({titulo: '', data: '', descricao: ''})
    }

    const captura = e => {
        const {value, name} = e.target

        if(name === 'titulo') {
            setNovaTarefa({'titulo': value, 'data': novaTarefa.data, 'descricao': novaTarefa.descricao})
        } else if (name === 'data') {
            setNovaTarefa({'titulo': novaTarefa.titulo, 'data': value, 'descricao': novaTarefa.descricao})
        } else if (name === 'descricao') {
            setNovaTarefa({'titulo': novaTarefa.titulo, 'data': novaTarefa.data, 'descricao': value})
        }
    }

    const removerTarefa = tar => {
        let lista = tarefa
        lista = lista.filter((t) => t!== tar)
        setTarefa(lista)
    }

    return (
        <DivListaTarefas>
            <Formulario addTarefa={addTarefa} tarefa={novaTarefa} digit={captura}/>
            {tarefa.map((tar, i) => (
                <Tarefa
                    key={i}
                    titulo={tar.titulo}
                    data={tar.data}
                    descricao={tar.descricao}
                    remove={removerTarefa.bind(this, tar)}
                />
            ))}
            <button onClick={addTarefa}> + </button>
        </DivListaTarefas>
    )
}

export default ListaTarefas;