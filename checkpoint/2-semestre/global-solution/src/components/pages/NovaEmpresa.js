import { Link } from 'react-router-dom';
import { NovoStyle } from '../../style/pages/novo';

const NovaEmpresa = () => {
    function salvar() {
        let cnpj = document.getElementById("cnpjForm").value;
        let razao = document.getElementById("razaoSocialForm").value;
        let nomeFantasia = document.getElementById("nomeFantasiaForm").value;
        let dataFundacao = document.getElementById("dataFundacaoForm").value;

        if (!cnpj || !razao || !nomeFantasia || !dataFundacao ) {
            alert("Preencha todos os campos para adicionar uma nova empresa.");
            return;
        } else {
            let novaEmpresa = {cnpj: cnpj, razaoSocial: razao, nomeFantasia: nomeFantasia, dataFundacao: dataFundacao}
            console.log(novaEmpresa)
            return;
        }
    }

    return (
        <NovoStyle className="container">
            <h2>Nova Empresa</h2>

            <form>
                <label> CNPJ:
                    <input type="text" id="cnpjForm" placeholder='00.000.000/0000-00' required />
                </label>

                <label> Razão Social:
                    <input type="text" id="razaoSocialForm" placeholder='A' required />
                </label>

                <label> Nome Fantasia:
                    <input type="text" id="nomeFantasiaForm" placeholder='Empresa Feliz' required />
                </label>

                <label> Data Fundação:
                    <input type="text" id="dataFundacaoForm" placeholder='01/01/2022' required />
                </label>

                <button className='btn btn-adicionar' type='button' onClick={() => salvar()}>Adicionar</button>
            </form>

            <hr/>

            <Link to="/main">
                <button className='btn btn-voltar'>Voltar</button>
            </Link>

            <Link to="/">
                <button className='btn btn-logout'>Logout</button>
            </Link>
        </NovoStyle>
    )
}

export default NovaEmpresa;