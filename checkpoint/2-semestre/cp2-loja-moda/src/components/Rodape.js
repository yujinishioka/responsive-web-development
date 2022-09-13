import Styled from 'styled-components'

const DivRodape = Styled.div`
    color: white;
    background: #ADD8E6;
    width: 95%;
    margin: 16px auto;
    padding: 4px 0;
    border-radius: 8px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
`

const Rodape = () => {
    return (
        <DivRodape>
            <p>fiap - 2022</p>
        </DivRodape>
    )
}

export default Rodape;