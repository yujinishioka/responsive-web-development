import styled from 'styled-components'

const DivHome = styled.div`
    width: 100%;
    height: 85vh;
    background: #bbf;

    h1, p {
        padding: 20px;
    }
`

const Home = () => {
    return (
        <DivHome>
            <h1>Pagina inicial</h1>
            <p>Projeto de controle de tarefas.</p>
        </DivHome>
    )
}

export default Home;