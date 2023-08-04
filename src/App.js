import logo from './logo.svg';
import './App.css';
import C02contador from './component/C02contador';
import C03dobleestado from './component/C03dobleestado';
import C01componente from './component/C01componente';
import C04variable from './component/C04variable';
import C05operador from './component/C05operador';
import C06matriz from './component/C06matriz';
import C07matrizOperaciones from './component/C07matrizOperaciones';

function App() {
  return (
    <div>
     <h1> COMPONENTE 7 </h1>
      <C07matrizOperaciones />
      <br></br>
    
      <h1> COMPONENTE 5 </h1>
      <C05operador />
      <br></br>

      <h1> COMPONENTE 3 </h1>
      <C03dobleestado />
      <br></br>

      <h1> COMPONENTE 1 </h1>
      <C01componente />
      <br></br>
     
    </div>
  );
}

export default App;