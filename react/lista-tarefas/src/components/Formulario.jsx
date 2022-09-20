import styled from 'styled-components'

const DivFormulario = styled.div`
    width: 100%;
    padding: 20px;
    background-color: #993;

    form {width: 50%; margin: auto;}
    form input, form textarea {width: 80%; padding: 5px;}
    form textarea {height: 80px;}
    form button {padding: 10px; background: #3c3; color: #fff}
`

const Formulario = props => {
    return (
        <DivFormulario>
            <form method='post' onSubmit={props.addTarefa}>
                <div>
                    <input 
                        name='titulo' 
                        placeholder='Título'
                        value={props.tarefa.titulo}
                        onChange={props.digit}
                    />
                </div>
                <div>
                    <input 
                        name='data' 
                        placeholder='Data'
                        value={props.tarefa.data}
                        onChange={props.digit}
                    />
                </div>
                <div>
                    <input 
                        name='descricao' 
                        placeholder='Descrição'
                        value={props.tarefa.descricao}
                        onChange={props.digit}
                    />
                </div>
                <button type='submit'> + </button>
            </form>
        </DivFormulario>
    )
}

export default Formulario;