import React from 'react';
import './App.css';
import ComponentTeste from './components/componentTeste';

const App = () => {

  let paragrafo = {
    textAlign: 'justify',
    color: 'lightgreen',
    textIndent: '50px',
    fontSize: '2em'
  }

  return (
    <div>
      <h1 style={{ fontSize:'4em',color:'lightblue' }}>Css em componentes</h1>
      <p style={paragrafo}>Formas de inserir CSS em componentes</p>
      <p className='paragrafo-2'>Aqui um exemplo de "className".</p>
      <ComponentTeste/>
    </div>
  );
}

export default App;