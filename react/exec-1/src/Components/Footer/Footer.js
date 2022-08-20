import React from "react";
import './Footer.css';

export default function Footer(props) {
    return(
        <>
            <footer>
				<p>{props.rodape}</p>
			</footer>
        </>
    )
}