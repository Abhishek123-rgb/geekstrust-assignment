import './App.css';
import Footer from './components/Footer';
import Planet from './components/Planets/Planet';
import Vechiles from './components/Vechil/Vechiles';


function App() {
  return (
    <div className="App">
      <h1 className="falcone">Finding Falcone!</h1>
      <h2 className="falcone">Select palanet you want search in:</h2>
      <Planet/>

      <Vechiles/>
      
      <Footer/>
    </div>
  );
}

export default App;