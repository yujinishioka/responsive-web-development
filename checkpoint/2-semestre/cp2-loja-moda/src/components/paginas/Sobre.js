import Styled from 'styled-components'

const DivSobre = Styled.div`
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

const Sobre = () => {
    const eu = 'Vinicius Yuji Nishioka - RM92895';

    return (
        <DivSobre>
            <h1>Sobre</h1>

            <p>Created by</p>
            <p>{eu}</p>
            <p>Diretor</p>
            <p>{eu}</p>
            <p>Roteiro</p>
            <p>{eu}</p>
            <p>Ator</p>
            <p>{eu}</p>
        </DivSobre>
    )
}

export default Sobre;