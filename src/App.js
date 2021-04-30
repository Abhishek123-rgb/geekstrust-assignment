import React, {useState} from "react"
import './App.css';
import Footer from './components/Footer';
import Header from "./components/Header";
import Planet from './components/Planets/Planet';
import Vechiles from './components/Vechil/Vechiles';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Header count={count}/>
      <Planet/>
      <Vechiles/>
      <div className="button">
        <button>Find Falcone</button>
      </div>
      <Footer/>
    </div>
  );
}

export default App;