import { Link } from "react-router-dom";
import { NovoStyle } from "../../style/pages/novo";

const NovoMotorista = () => {
    return (
        <NovoStyle className='container'>
            <h2>Novo Motorista</h2>

            <form>
                <label> Nome:
                    <input type="text" name="nome" placeholder='' required />
                </label>

                <label> Sobrenome:
                    <input type="text" name="sobrenome" placeholder='' required />
                </label>

                <label> CNH:
                    <input type="text" name="cnh" placeholder='00000000000' required />
                </label>

                <label> CPF:
                    <input type="text" name="cpf" placeholder='' required />
                </label>

                <label> RG:
                    <input type="text" name="rg" placeholder='' required />
                </label>

                <label> Idade:
                    <input type="number" name="idade" placeholder='' required />
                </label>

                <button className='btn btn-adicionar' type='button'>Adicionar</button>
            </form>

            <hr/>

            <Link to="/main">
                <button className='btn btn-voltar'>Voltar</button>
            </Link>
        </NovoStyle>
    )
}

export default NovoMotorista;