import { Link } from 'react-router-dom';
import { NovoStyle } from '../../style/pages/novo';

const NovaEmpresa = () => {
    function salvar() {
        let cnpj = document.getElementById("cnpjName").value;
        let razao = document.getElementById("razaoSocialName").value;
        let nomeFantasia = document.getElementById("nomeFantasiaName").value;
        let dataFundacao = document.getElementById("dataFundacaoName").value;
        
        let novaEmpresa = [cnpj, razao, nomeFantasia, dataFundacao]
        console.log(novaEmpresa)
        return;
    }

    return (
        <NovoStyle className="container">
            <h2>Nova Empresa</h2>

            <form>
                <label> CNPJ:
                    <input type="text" id="cnpjName" placeholder='00.000.000/0000-00' required />
                </label>

                <label> Razão Social:
                    <input type="text" id="razaoSocialName" required />
                </label>

                <label> Nome Fantasia:
                    <input type="text" id="nomeFantasiaName" required />
                </label>

                <label> Data Fundação:
                    <input type="text" id="dataFundacaoName" placeholder='01/01/2022' required />
                </label>

                <button className='btn btn-adicionar' type='button' onClick={() => salvar()}>Adicionar</button>
            </form>

            <hr/>

            <Link to="/main">
                <button className='btn btn-voltar'>Voltar</button>
            </Link>
        </NovoStyle>
    )
}

export default NovaEmpresa;