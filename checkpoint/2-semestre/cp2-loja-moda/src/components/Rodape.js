import Styled from 'styled-components'

const DivRodape = Styled.div`
    color: #5c1daa;
    background: #ADD8E6;
    width: 95%;
    margin: 16px auto;
    padding: 4px 0;
    border-radius: 8px;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    display: flex;

    h2 {
        font-size: 24px;
    }

    p {
        font-size: 16px;
    }

    .colunas {
        margin: 0 20px;
        display: flex;
    }

    .direita, .esquerda {
        width: 50%;
        justify-content: space-between;
    }

    .direita {
        align-items: flex-end;
    }
`

const Rodape = () => {
    return (
        <DivRodape>
            <div className='colunas esquerda'>
                <div className='box'>
                    <h2>A Empresa</h2>
                    <p>Moda Ora</p>
                    <p>Locais</p>
                </div>
                <div className='box'>
                    <h2>Suporte</h2>
                    <p>Como pedir</p>
                    <p>Como rastrear</p>
                </div>
                <div className='box'>
                    <h2>Fale Conosco</h2>
                    <p>Contate-nos</p>
                </div>
            </div>
            <div className='colunas direita'>
                <p>moda ora - 2022</p>
                <p>Termos de privacidade</p>
                <p>Avisos</p>
            </div>
        </DivRodape>
    )
}

export default Rodape;