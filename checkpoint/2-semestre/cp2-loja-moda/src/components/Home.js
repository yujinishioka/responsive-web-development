import React from 'react'
import Styled from 'styled-components'
import ora from '../images/ora-ora.png'

const DivHome = Styled.div`
    background-color: #ffb;
    width: 900px;
    height: 100%;
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

    hr {
        background-color: #ADD8E6;
        width: 80%;
        height: 4px;
        border-radius: 6px;
    }

    .box-image {
        width: 800px;
        height: 450px;
        margin: 0 auto;
        border: 8px solid white;
        border-radius: 8px
    }

    .image-1 {
        width: 800px;
        height: 450px;
        border-radius: 50px;
    }
`

const Home = () => {
    return (
        <DivHome>
            <h1>Home</h1>
            <p>As roupas mais da oras.</p>
            <hr/>
            <p>VEM PARA</p>
            <div className='box-image ora'>
                <img src={ora} className='image-1' alt="Ora"/>
            </div>
            <hr/>
        </DivHome>
    )
}

export default Home;