import './App.css';
import Planet from './components/Planets/Planet';

function App() {
  return (
    <div className="App">
      <h1 className="falcone">Finding Falcone!</h1>
      <h2 className="falcone">Select palanet you want search in:</h2>
      <Planet/>
    </div>
  );
}

export default App;
