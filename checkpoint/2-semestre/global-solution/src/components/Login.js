import { Link } from 'react-router-dom';

import { LoginStyle } from '../style/login.js';

const Login = () => {
    return (
        <LoginStyle className="container">
            <h2>Faça seu login!</h2>
            <form>
                <p>e-mail:</p>
                <label>
                    <input type="email" name="email" />
                </label>
                
                <p>senha:</p>
                <label>
                    <input type="password" name="senha" />
                </label>

                <Link to="/main">
                    <button className='btn btn-login' type='button'>Login</button>
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