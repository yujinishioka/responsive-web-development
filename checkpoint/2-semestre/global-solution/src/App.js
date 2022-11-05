import './style/reset.css';
import styled from 'styled-components';
import colors from './style/colors';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Registro from './components/pages/Registro';
import Main from './components/pages/Main';
import Empresa from './components/pages/Empresa';
import Veiculo from './components/pages/Veiculo';
import NovaEmpresa from './components/pages/NovaEmpresa';
import NovoVeiculo from './components/pages/NovoVeiculo';

function App() {
  return (
    <AppStyle>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/registrar' element={<Registro />} />
          <Route path='/main' element={<Main />} />
          <Route path='/main/empresa' element={<Empresa />} />
          <Route path='/main/veiculo' element={<Veiculo />} />
          <Route path='/main/empresa/nova' element={<NovaEmpresa />} />
          <Route path='/main/veiculo/novo' element={<NovoVeiculo />} />
        </Routes>
      </Router>
      <Footer/>
    </AppStyle>
  );
}

const AppStyle = styled.div`
  min-height: 100vh;
  color: #FFFFFF;
  background: #595955;

  .container {
    max-width: 900px;
    min-width: 600px;
    margin: 0 auto;
  }

  .btn {
    margin: 10px auto;
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: center;
    text-transform: uppercase;
    color: ${colors.greyBackground};
    background: ${colors.primaryColor};
    border: 1px solid #FFFFFF;
    border-radius: 8px;
  }

  .btn-voltar {
    width: 80px;
  }

  .btn:hover {
    opacity: 0.3;
  }
`

export default App;
