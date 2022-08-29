import React from 'react';
import PrimeiraClasse from './components/PrimeiraClasse';
import Funcionario from './components/Funcionario';
import Aluno from './components/Aluno';

export default () => {
    return (
        <div>
            <h1>Classes</h1>
            <PrimeiraClasse msg='Agora mudou um pouco'/>
            <Funcionario add={1}/>
            <Aluno/>
        </div>
    )
}