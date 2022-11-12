import { Link } from 'react-router-dom';

import { LoginStyle } from '../style/login.js';

const Login = () => {
    return (
        <LoginStyle className="container">
            <h2>Faça seu login!</h2>
            <form autoComplete='off'>
                <label for="email">
                    <span>E-mail:</span>
                    <input id="email" type="email" name="email" autoComplete="off" className="input_text"/>
                </label>
                
                <label for="password">
                    <span>Senha:</span>
                    <input id="password" type="password" name="senha" autoComplete="new-password" className="input_text"/>
                </label>

                <Link className='btn btn-login' to="/main">
                    <span>Login</span>
                </Link>
            </form>
            <hr/>
            <nav>
                <Link to="/registrar"><h3>Caso ainda não tenha uma conta <br/> Registre-se aqui!</h3></Link>
            </nav>
        </LoginStyle>
    )
}

export default Login;