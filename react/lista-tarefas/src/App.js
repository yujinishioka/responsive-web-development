import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu.jsx';
import Home from './components/Home.jsx';
import ListaTarefas from './components/ListaTarefas.jsx';

function App() {
  return (
    <Router>
      <Menu/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/tarefas' element={<ListaTarefas/>}/>
      </Routes>
    </Router>
  );
}

export default App;
