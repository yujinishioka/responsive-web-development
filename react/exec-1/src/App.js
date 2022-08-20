import './App.css';

import Header from './Components/Header/Header';
import Conteudo from './Components/Conteudo/Conteudo';
import Footer from './Components/Footer/Footer';
// import logoJS from 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png';

function App() {

  const link = ['Home', 'Quem Somos', 'Cursos', 'Fale Conosco'];

  const escola = 'FIAP';
  const turma = 'TDST';
  const professor = 'Renato Bortolin';
  const alunos = ['Carol', 'Cecilia', 'Enrico', 'Felipe', 'Gabriel', 'Guilherme'];
  const novoAluno = () => 'Leandro';
  // const imagem = () => <img src={logoJS}/>;
  const sessao = ['TDSS', 'TDST', 'TDSU', 'TDSV', 'manhã', 'tarde', 'noite', 'integral'];

  const rodape = 'FIAP - 2022'

  return (
    <div id="container">
      <Header link = {link}/>
      <Conteudo 
        escola = {escola} 
        turma = {turma} 
        professor = {professor} 
        alunos = {alunos} 
        novoAluno = {novoAluno} 
        // imagem = {imagem} 
        sessao = {sessao}
      />
      <Footer rodape = {rodape}/>
    </div>
  );
}

export default App;
