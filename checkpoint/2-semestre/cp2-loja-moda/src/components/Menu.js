import React from 'react'
import { Link } from 'react-router-dom'
import Styled from 'styled-components'
import icon from '../images/icon-192.png'

const DivMenu = Styled.div`
    color: white;
    background: #ADD8E6;
    width: 95%;
    padding: 0;
    margin: 16px auto;
    border-radius: 8px;

    display: flex;
    justify-content: space-between;
    flex-flow: row nowrap;
    align-items: center;

    .banner-icon {
        display: flex;
        text-align: center;
    }

    .icon {
        width: 90px;
        position: absolute;
        margin-top: 10px;
        margin-left: 30px;
    }

    h1 {
        margin-left: 150px;
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
            <div className='banner-icon'>
                <img src={icon} className='icon' alt=''/>
                <h1>moda ora</h1>
            </div>
            
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