import Styled from 'styled-components'

const DivModaFeminina = Styled.div`
    background-color: #abfcfd;
    width: 900px;
    height: 100%;
    margin: 0 auto;
    border-radius: 50px 50px 6px 6px;
    font-family: Amatic;
    text-align: center;

    .banner {
        border-radius: 50px 50px 0 0;
    }

    .banner-feminina {
        width:100%;
        height:563px;
        border-radius: 50px 50px 0 0;
        background-size: cover;
        background-image: url('/images/jolyne-banner1.png')
    }

    h1, h2, h3, p {
        color: red;
    }

    h1 {
        font-size: 80px;
        padding-top: 8px;
    }

    h2 {
        font-size: 60px;
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

    .img-prod {
        width: 200px;
        height: 350px;
        margin: 20px auto 0 auto;
        border: 1px solid white;
        border-radius: 12px;
    }

    .img-1 {
        background-position: 912px 684px;
    }

    .img-2 {
        background-position: 912px 1002px;
    }

    .img-3 {
        background-position: 423px 151px;
    }

    .img-4 {
        background-position: 619px 596px;
    }

    .img-5 {
        background-position: 329px 794px;
    }

    .img-6 {
        background-position: 134px 1000px;
    }

    .img-7 {
        background-size: cover;
        background-position: 230px 0;
        background-image: url('images/vestido-frente.webp')
    }
`

const ModaFeminina = () => {
    return (
        <DivModaFeminina>
            <div className='banner'>
                <div className='banner-feminina'></div>
            </div>
            <hr/>
            <h1>Moda Feminina</h1>
            <hr/>

            <h2>Categorias</h2>
            <div className='box-bg'>
                <div className='box-sm'>
                    <div className='img-cat img-1'></div>
                    <h3>Top</h3>
                </div>
                
                <div className='box-sm'>
                    <img className='img-cat img-2' alt=''/>
                    <h3>Saias</h3>
                </div>

                <div className='box-sm'>
                    <img className='img-cat img-3' alt=''/>
                    <h3>Vestidos</h3>
                </div>
                
                <div className='box-sm'>
                    <img className='img-cat img-4' alt=''/>
                    <h3>Intimas</h3>
                </div>
                
                <div className='box-sm'>
                    <img className='img-cat img-5' alt=''/>
                    <h3>Sapatos</h3>
                </div>
                
                <div className='box-sm'>
                    <img className='img-cat img-6' alt=''/>
                    <h3>Acessorios</h3>
                </div>
            </div>
            <hr/>

            <h2>HOT</h2>
            <div className='box-bg'>
                <div className='box-md'>
                    <img className='img-prod img-7' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>
                
                <div className='box-md'>
                    <img className='img-prod img-8' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>

                <div className='box-md'>
                    <img className='img-prod img-9' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>
                
                <div className='box-md'>
                    <img className='img-prod img-10' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>
            </div>
            <hr/>

            <h2>Promoções</h2>
            <div className='box-bg'>
                <div className='box-md'>
                    <img className='img-prod img-11' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>
                
                <div className='box-md'>
                    <img className='img-prod img-12' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>

                <div className='box-md'>
                    <img className='img-prod img-13' alt=''/>
                    <h3>Nome</h3>
                    <p>descricao</p>
                </div>
            </div>
            <hr/>
        </DivModaFeminina>
    )
}

export default ModaFeminina;