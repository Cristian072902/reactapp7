import logo from './logo.svg';
import './App.css';
import C01component from './component/C01componente';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C01componente from './component/C01componente';

function App() {
  return (
    <div>
     <h1>Componente 1</h1>
     <C01componente/>

     <h2>Componente 2</h2>
     <C02contador/>

     <h3>Componente 3</h3>
     <C03dobleestado/>

    </div>
  );
}

export default App;