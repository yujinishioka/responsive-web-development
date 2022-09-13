import Styled from 'styled-components'
import banner from '../../images/jolyne-banner1.png'

const DivModaFeminina = Styled.div`
    background-color: #abfcfd;
    width: 900px;
    height: 100%;
    margin: 0 auto;
    border-radius: 50px 50px 6px 6px;
    font-family: Gorgeous;
    text-align: center;

    .banner {
        width:100%;
        height:563px;
        border-radius: 50px 50px 0 0;
    }

    h1, p {
        color: red;
    }

    h1 {
        font-size: 80px;
        padding-top: 8px;
    }

    p {
        font-size: 20px;
    }

    hr {
        background-color: #ADD8E6;
        width: 80%;
        height: 4px;
        border-radius: 6px;
    }
`

const ModaFeminina = () => {
    return (
        <DivModaFeminina>
            <img src={banner} className='banner'/>
            <hr/>
            <h1>Moda Feminina</h1>
            <hr/>
        </DivModaFeminina>
    )
}

export default ModaFeminina;