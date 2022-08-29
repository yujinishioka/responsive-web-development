import './App.css';
import Semaforo from './components/semaforo/semaforo'
import Carros from './components/carros/carros';

const App = () => {
  return (
    <div>
      <Semaforo/>
      <Carros>
        <p>Hyundai</p>
      </Carros>
    </div>
  );
}

export default App;
