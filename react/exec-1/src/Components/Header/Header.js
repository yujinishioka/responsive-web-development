import React from 'react';
import './Header.css'

export default function Header(props) {
    return(
        <div>
            <header>
				<nav>
					<ul>
						<li>{props.link[0]}</li>
						<li>{props.link[1]}</li>
						<li>{props.link[2]}</li>
						<li>{props.link[3]}</li>
					</ul>					
				</nav>
				<div id="logo"><img src="./logoFiap.png"/></div>
				
				<div id="banner"></div>	

			</header>
        </div>
    )
}