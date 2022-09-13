import Styled from 'styled-components'

const DivModaFeminina = Styled.div`
    background-color: #ffb;
    width: 900px;
    height: 85vh;
    margin: 0 auto;
    border-radius: 6px;
    text-align: center;

    h1, p {
        color: Orange;
    }

    h1 {
        padding-top: 32px;
    }

    p {
        font-size: 20px;
    }
`

const ModaFeminina = () => {
    return (
        <DivModaFeminina>
            <h1>Moda Feminina</h1>
        </DivModaFeminina>
    )
}

export default ModaFeminina;