import Styled from 'styled-components'
import banner from '../../images/jojo.png'

const DivModaMasculina = Styled.div`
    background-color: #d4d8a0
;
    width: 900px;
    height: 100%;
    margin: 0 auto;
    border-radius: 50px 50px 6px 6px;
    font-family: Voga;
    text-align: center;

    .banner {
        width:100%;
        height:563px;
        border-radius: 50px 50px 0 0;
    }

    h1, p {
        color: Orange;
    }

    h1 {
        font-size: 80px;
        padding-top: 32px;
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
    
    .box-bg {
        width: 90%;
        margin: 30px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }

    .box-sm {
        width: 350px;
        margin: 30px 0;
        background-color: rgb(255, 255, 255, 0.4);
        transition: all ease-in 300ms;
    }

    .box-sm:hover {
        background-color: rgb(255, 255, 255, 0.7);
        transform: scale(1.1, 1.1);
    }
`

const ModaMasculina = () => {
    return (
        <DivModaMasculina>
            <img src={banner} className='banner' alt='banner'/>
            <hr/>
            <h1>Moda Masculina</h1>
            <hr/>

            <div className='box-bg'>
                <div className='box-sm'>
                    <img className='img-prod img-1' alt=''/>
                    <h2>Nome</h2>
                    <p>descricao</p>
                </div>
                
                <div className='box-sm'>
                    <img className='img-prod img-1' alt=''/>
                    <h2>Nome</h2>
                    <p>descricao</p>
                </div>

                <div className='box-sm'>
                    <img className='img-prod img-1' alt=''/>
                    <h2>Nome</h2>
                    <p>descricao</p>
                </div>
            </div>

            <hr/>
        </DivModaMasculina>
    )
}

export default ModaMasculina;