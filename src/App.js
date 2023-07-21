import logo from './logo.svg';
import './App.css';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C01componente from './component/C01componente';
import C04variable from './component/C04variable';
import C05operador from './component/C05operador';
import C06matriz from './component/C06matriz';

function App() {
  return (
    <div>
     <h1>Componente 1</h1>
     <C01componente/>
      <br></br>
     <h1>Componente 2</h1>
     <C02contador/>
     <br></br>

     <h1>Componente 3</h1>
     <C03dobleestado/>
     <br></br>
     <br></br>
     <h1>Componente 4</h1>
     <C04variable xVariable="hoy dia es viernes..."/>
     <br></br>

     <h1>Componente 5</h1>
     <C05operador/>
     <br></br>

     <h1>Componente 6</h1>
     <C06matriz/>
     <br></br>

    </div>
  );
}

export default App;