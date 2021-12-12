import './App.css';
import Navbar from './components/Navbar'
import inicio from './assets/inicio.png';

function App() {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <img src={inicio} alt="Laboratorio"/>
        </div>
      </div>
    </div>
    
  );
}

export default App;
