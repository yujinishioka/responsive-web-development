import { Link } from 'react-router-dom'

import { RegistroStyle } from '../../style/pages/registro.js';

const Registro = () => {
    return (
        <RegistroStyle className='container'>
            <h2>Registre-se!</h2>
            <form autoComplete='off'>
                <p>e-mail:</p>
                <label>
                    <input type="email" name="emailNovo" autoComplete='off' required />
                </label>

                <p>confirme seu e-mail:</p>
                <label>
                    <input type="email" name="emailNovoConfirma" autoComplete='off' required />
                </label>

                <p>senha:</p>
                <label>
                    <input type="password" name="senhaNova" autoComplete='new-password' required />
                </label>

                <p>confirme sua senha:</p>
                <label>
                    <input type="password" name="senhaNovaConfirma" autoComplete='new-password' required />
                </label>

                <button className='btn btn-registrar' type='button'>Registrar-se</button>
            </form>
            <hr />
            <Link to='/'>
                <p className='login'>Já possui cadastro? Faça seu login!</p>
            </Link>
        </RegistroStyle>
    )
}

export default Registro;