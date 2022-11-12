import { useState } from "react";
import { Link } from 'react-router-dom';

import { RegistroStyle } from '../../style/pages/registro.js';

const Registro = () => {

    const [novo, setNovo] = useState({
        loginUsuario: "",
        senha: "",
        tipoUsuario: "Admin",
        statusUsuario: "A"
    })

    const handleChange = e => {
        setNovo({...novo, [e.target.name]:e.target.value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch(`http://localhost:8080/GlobalSolution/rest/usuario`,{
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = "/"
        })
    }

    return (
        <RegistroStyle className='container'>
            <h2>Registre-se!</h2>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <label>
                    <span>e-mail:</span>
                    <input type="email" name="loginUsuario" value={novo.loginUsuario} autoComplete='off' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>confirme seu e-mail:</span>
                    <input type="email" name="loginUsuarioConfirma" autoComplete='off' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>senha:</span>
                    <input type="password" name="senha" value={novo.senha} autoComplete='new-password' required onChange={handleChange} className="input_text" />
                </label>

                <label>
                    <span>confirme sua senha:</span>
                    <input type="password" name="senhaConfirma" autoComplete='new-password' required onChange={handleChange} className="input_text" />
                </label>

                <button className='btn btn-registrar'>Registrar-se</button>
            </form>

            <hr />

            <Link to='/'>
                <p className='login'>Já possui cadastro? Faça seu login!</p>
            </Link>
        </RegistroStyle>
    )
}

export default Registro;