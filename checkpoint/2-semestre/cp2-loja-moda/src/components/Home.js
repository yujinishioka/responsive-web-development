import React from 'react'
import Styled from 'styled-components'

const DivHome = Styled.div`
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

const Home = () => {
    return (
        <DivHome>
            <h1>Home</h1>
            <p>As roupas mais daoras.</p>
        </DivHome>
    )
}

export default Home;