import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'

const DivMenu = Styled.div`
    color: white;
    background: #ADD8E6;
    width: 100%;
    padding: 16px 0;
    margin: 16px auto;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;

    h1 {
        margin: 0 64px;
        text-transform: uppercase;
    }

    nav {
        display: flex;
        justify-content: flex-end;
    }

    nav li {
        margin: 0 16px;
        list-style: none;
        text-transform: uppercase;
        font-weight: bold;
    }

    nav .link {
        color: white;
        text-decoration: none;
    }

    nav .link:hover {
        color: 	#4682B4;
    }
`

const Menu = () => {
    return (
        <DivMenu>
            <h1>moda ora</h1>
            <nav>
                <li><Link to={'/'} className='link'>home</Link></li>
                <li><Link to={'/moda-feminina'} className='link'>moda feminina</Link></li>
                <li><Link to={'/moda-masculina'} className='link'>moda masculina</Link></li>
                <li><Link to={'/moda-infantil'} className='link'>moda infantil</Link></li>
                <li><Link to={'/sobre'} className='link'>sobre</Link></li>
            </nav>
        </DivMenu>
    )
}

export default Menu;