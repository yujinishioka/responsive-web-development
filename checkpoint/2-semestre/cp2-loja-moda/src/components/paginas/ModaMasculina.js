import Styled from 'styled-components'

const DivModaMasculina = Styled.div`
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

const ModaMasculina = () => {
    return (
        <DivModaMasculina>
            <h1>Moda Masculina</h1>
        </DivModaMasculina>
    )
}

export default ModaMasculina;