import { Link } from "react-router-dom";
import { NovoStyle } from "../../style/pages/novo";

const NovoMotorista = () => {
    function salvar() {
        let nome = document.getElementById("nomeForm").value;
        let sobrenome = document.getElementById("sobrenomeForm").value;
        let cnh = document.getElementById("cnhForm").value;
        let cpf = document.getElementById("cpfForm").value;
        let rg = document.getElementById("rgForm").value;
        let idade = document.getElementById("idadeForm").value;

        if (!nome || !sobrenome || !cnh || !cpf || !rg || !idade) {
            alert("Preencha todos os campos para adicionar um novo motorista.");
            return;
        } else {
            let novoMotorista = {nome: nome, sobrenome: sobrenome, cnh: cnh, cpf: cpf, rg: rg, idade: idade}
            console.log(novoMotorista)
            return;
        }
    }

    return (
        <NovoStyle className='container'>
            <h2> Novo Motorista </h2>

            <form>
                <label for="nomeForm"> 
                    <span> Nome: </span>
                    <input type="text" id="nomeForm" placeholder='João' required className="input_text"/>
                </label>

                <label for="sobrenomeForm"> 
                    <span> Sobrenome: </span>
                    <input type="text" id="sobrenomeForm" placeholder='da Silva' required className="input_text"/>
                </label>

                <label for="cnhForm"> 
                    <span> CNH: </span>
                    <input type="text" id="cnhForm" placeholder='00000000000' required className="input_text"/>
                </label>

                <label for="cpfForm"> 
                    <span> CPF: </span>
                    <input type="text" id="cpfForm" placeholder='000.000.000-00' required className="input_text"/>
                </label>

                <label for="rgForm"> 
                    <span> RG: </span>
                    <input type="text" id="rgForm" placeholder='00.000.000-0' required className="input_text"/>
                </label>

                <label for="idadeForm"> 
                    <span> Idade: </span>
                    <input type="number" id="idadeForm" placeholder='20' required className="input_text"/>
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

export default NovoMotorista;