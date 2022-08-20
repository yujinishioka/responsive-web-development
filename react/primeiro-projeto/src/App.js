import './App.css';
import Header from './components/header';
import Menu from './components/menu';
import Carros from './components/carros';
import Conteudos from './components/conteudo';

function App() {
  return (
    <div className="App">
      <Header/>
      <Menu/>
      <Carros/>
      <Conteudos/>
    </div>
  );
}

export default App;
