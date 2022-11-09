import { Link } from 'react-router-dom'

import { RegistroStyle } from '../../style/pages/registro.js';

const Registro = () => {
    function salvar() {
        let email = document.getElementById("emailNovo").value;
        let senha = document.getElementById("senhaNova").value;
        let registro = {
            loginUsuario: email,
            senha: senha,
            statusUsuario: true,
        }
        console.log(registro)
        return;
    }

    return (
        <RegistroStyle className='container'>
            <h2>Registre-se!</h2>
            <form autoComplete='off'>
                <p>e-mail:</p>
                <label>
                    <input type="email" id="emailNovo" autoComplete='off' required />
                </label>

                <p>confirme seu e-mail:</p>
                <label>
                    <input type="email" id="emailNovoConfirma" autoComplete='off' required />
                </label>

                <p>senha:</p>
                <label>
                    <input type="password" id="senhaNova" autoComplete='new-password' required />
                </label>

                <p>confirme sua senha:</p>
                <label>
                    <input type="password" id="senhaNovaConfirma" autoComplete='new-password' required />
                </label>

                <button className='btn btn-registrar' type='button' onClick={() => salvar()}>Registrar-se</button>
            </form>
            <hr />
            <Link to='/'>
                <p className='login'>Já possui cadastro? Faça seu login!</p>
            </Link>
        </RegistroStyle>
    )
}

export default Registro;