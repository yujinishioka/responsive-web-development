import React from 'react'
import Styled from 'styled-components'

const DivHome = Styled.div`
    background-color: #ffb;
    width: 900px;
    height: 100%;
    margin: 0 auto;
    border-radius: 6px;
    text-align: center;

    h1, h2, p {
        color: Orange;
    }

    h1 {
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

    .banner {
        width: 800px;
        height: 450px;
        margin: 0 auto;
        border-radius: 50px;
        background-size: cover;
        background-image: url('/images/banner-home.png');
    }
`

const Home = () => {
    return (
        <DivHome>
            <h1>Home</h1>
            <p>As roupas mais da oras.</p>
            <hr/>
            <p>VEM PARA</p>
            <div className='banner'></div>
            <hr/>
            <h2>Trabalho de Responsive - Professor: Renato Bortolin</h2>
            <hr/>
        </DivHome>
    )
}

export default Home;