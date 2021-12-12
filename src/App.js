import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import inicio from './assets/inicio.png';

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <img src={inicio} alt="Laboratorio"/>
        </div>
        <div>
          <Login />
        </div>
      </div>
    </div>
    
  );
}

export default App;
