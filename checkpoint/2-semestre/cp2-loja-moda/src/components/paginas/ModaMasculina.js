import Styled from 'styled-components'

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
        background-size: cover;
        background-image: url('/images/banner-masculina.png')
    }

    h1, h2, h3, p {
        color: black;
    }

    h1 {
        font-size: 80px;
        padding-top: 32px;
    }

    h2 {
        font-size: 60px;
    }

    p {
        font-size: 20px;
    }

    p span {
        font-weight: bold;
    }

    .riscado {
        text-decoration: line-through;
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
        background-position: 1009px 156px;
    }

    .img-2 {
        background-position: 1009px 684px;
    }

    .img-3 {
        background-position: 813px 342px;
    }

    .img-4 {
        background-size: cover;
        background-position: 230px 0;
        background-image: url('images/camisa-frente.webp')
    }

    .img-4:hover, .img-5:hover {
        transition: all ease-in 200ms;
    }

    .img-4:hover {
        background-image: url('images/camisa-costa.webp')
    }

    .img-5 {
        background-size: cover;
        background-position: 230px 0;
        background-image: url('images/calca-frente.webp')
    }

    .img-5:hover {
        background-image: url('images/calca-costa.webp')
    }

`

const ModaMasculina = () => {
    return (
        <DivModaMasculina>
            <div className='banner'></div>
            <hr/>
            <h1>Moda Masculina</h1>
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
                    <h3>Camisa</h3>
                    <p>Manta Formal</p>
                    <p><span>R$ 88,90</span></p>
                </div>
                
                <div className='box-md'>
                    <img className='img-prod img-5' alt=''/>
                    <h3>Calça</h3>
                    <p>Bolso Expressão</p>
                    <p><span>R$ 99,90</span></p>
                </div>
            </div>
            <hr/>

            <h2>Promoções</h2>
            <div className='box-bg'>
                <div className='box-md'>
                    <img className='img-prod img-4' alt=''/>
                    <h3>Camisa</h3>
                    <p>Manta Formal</p>
                    <p>de <span className='riscado'>R$ 99,90</span> por <span>R$ 89,90</span></p>
                </div>
                
                <div className='box-md'>
                    <img className='img-prod img-5' alt=''/>
                    <h3>Calça</h3>
                    <p>Bolso Expressão</p>
                    <p>de <span className='riscado'>R$ 115,90</span> por <span>R$ 99,90</span></p>
                </div>
            </div>
            <hr/>
        </DivModaMasculina>
    )
}

export default ModaMasculina;