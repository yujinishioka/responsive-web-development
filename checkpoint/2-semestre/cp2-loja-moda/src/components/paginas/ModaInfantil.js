import Styled from 'styled-components'

const DivModaInfantil = Styled.div`
    background-color: #0169e4;
    width: 900px;
    height: 100%;
    margin: 0 auto;
    border-radius: 50px 50px 6px 6px;
    font-family: Penna;
    text-align: center;

    .banner {
        width:100%;
        height:563px;
        border-radius: 50px 50px 0 0;
        background-size: cover;
        background-image: url('/images/josuke-banner2.png');
    }

    h1, h2 {
        color: Orange;
    }

    h3, p {
        color: black;
    }

    h1 {
        font-size: 80px;
        padding-top: 32px;
    }

    h2 {
        font-size: 60px;
        text-transform: uppercase;
    }

    h3 {
        font-size: 30px
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
    
    .box-md {
        width: 350px;
        margin: 30px 0;
        background-color: rgb(255, 255, 255, 0.4);
    }
    
    .box-md, .box-sm {
        border-radius: 12px;
        transition: all ease-in 300ms;
    }

    .box-md:hover, .box-sm:hover {
        background-color: rgb(255, 255, 255, 0.7);
        transform: scale(1.1, 1.1);
    }

    .box-sm {
        width: 150px;
        margin: 20px 10px;
        background-color: rgb(255, 255, 255, 0.4);
    }

    .img-cat {
        width: 120px;
        height: 120px;
        margin: 10px auto 0 auto;
        border: 1px solid white;
        border-radius: 12px;
        background-image: url('/images/categorias-icon.png');
    }
`

const ModaInfantil = () => {
    return (
        <DivModaInfantil>
            <div className='banner'></div>

            <hr/>
            <h1>Moda Infantil</h1>
            <hr/>

            <h2>Categorias</h2>
            <div className='box-bg'>
                <div className='box-sm'>
                    <div className='img-cat img-1'></div>
                    <h3>Top</h3>
                </div>
                
                <div className='box-sm'>
                    <img className='img-cat img-2' alt=''/>
                    <h3>Calças</h3>
                </div>

                <div className='box-sm'>
                    <img className='img-cat img-3' alt=''/>
                    <h3>Intimos</h3>
                </div>
            </div>
            <hr/>

            <h2>HOT</h2>
            <div className='box-bg'>
                <div className='box-md'>
                    <img className='img-prod img-4' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>
                
                <div className='box-md'>
                    <img className='img-prod img-5' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>
            </div>
            <hr/>

            <h2>Promos</h2>
            <div className='box-bg'>
                <div className='box-md'>
                    <img className='img-prod img-6' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>
                
                <div className='box-md'>
                    <img className='img-prod img-7' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>
            </div>
            <hr/>
        </DivModaInfantil>
    )
}

export default ModaInfantil;