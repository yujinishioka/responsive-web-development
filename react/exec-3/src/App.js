import './App.css';
import Header from './components/header/header';
import Conteudo from './components/conteudo/conteudo'
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Conteudo/>
      <Footer/>
    </div>
  );
}

export default App;
