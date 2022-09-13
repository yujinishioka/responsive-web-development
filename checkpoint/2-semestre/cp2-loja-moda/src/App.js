import { Route, Routes } from 'react-router-dom'
import './App.css';
import Menu from './components/Menu';
import Home from './components/Home';
import ModaFeminina from './components/paginas/ModaFeminina';
import ModaMasculina from './components/paginas/ModaMasculina';
import ModaInfantil from './components/paginas/ModaInfantil';
import Sobre from './components/paginas/Sobre';
import Rodape from './components/Rodape';

function App() {
  return (
    <>
      <Menu/>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/moda-feminina' element={<ModaFeminina/>}></Route>
        <Route path='/moda-masculina' element={<ModaMasculina/>}></Route>
        <Route path='/moda-infantil' element={<ModaInfantil/>}></Route>
        <Route path='/sobre' element={<Sobre/>}></Route>
      </Routes>

      <Rodape/>
    </>
  );
}

export default App;
