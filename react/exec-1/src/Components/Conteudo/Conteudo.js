import React from 'react';
import './Conteudo.css';

export default function Conteudo(props) {
    return(
        <>
            <main>
            <h1>{props.escola}</h1>
            <h2>{props.turma}</h2>
            <h3>{props.professor}</h3>
            <hr/>
            
            <div className='box'>
                <ul>
                    <li>{props.alunos[0]}</li>
                    <li>{props.alunos[1]}</li>
                    <li>{props.alunos[2]}</li>
                    <li>{props.alunos[3]}</li>
                    <li>{props.alunos[4]}</li>
                    <li>{props.alunos[5]}</li>
                    <li>{props.novoAluno()}</li>
                </ul>

                <div className='imagem'>
                    {/* {props.imagem()} */}
                    <img src='https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'/>
                </div>
            </div>
            
            <article>

            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>	

            <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.	
            </p>	
            </article>		

            <aside>
                <section>
                    <ul>
                        <li>{props.sessao[0]}</li>
                        <li>{props.sessao[1]}</li>
                        <li>{props.sessao[2]}</li>
                        <li>{props.sessao[3]}</li>
                    </ul>	
                </section>
                <section>
                    <ul>
                        <li>{props.sessao[4]}</li>
                        <li>{props.sessao[5]}</li>
                        <li>{props.sessao[6]}</li>
                        <li>{props.sessao[7]}</li>
                    </ul>	
                </section>
            </aside>


            </main>
        </>
    )
}