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
                <label for="emailNovo">
                    <span>E-mail:</span>
                    <input type="email" id="emailNovo" autoComplete='off' required className="input_text"/>
                </label>

                <label for="emailNovoConfirma">
                    <span>Confirme seu e-mail:</span>
                    <input type="email" id="emailNovoConfirma" autoComplete='off' required className="input_text"/>
                </label>

                <label for="senhaNova">
                    <span>Senha:</span>
                    <input type="password" id="senhaNova" autoComplete='new-password' required className="input_text"/>
                </label>

                <label for="senhaNovaConfirma">
                    <span>Confirme sua senha:</span>
                    <input type="password" id="senhaNovaConfirma" autoComplete='new-password' required className="input_text"/>
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