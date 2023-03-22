import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Counter, setCounter] = useState(0)
  const Increment = () => {
    setCounter(Counter + 1);
  }
  const Decrement = () => {
    setCounter(Counter - 1)
  }
  return (
    <div className="App">
      <button onClick={Increment} className='button'>Increment</button>
      
        
          {Counter}
       
      
      <button onClick={Decrement} className='button'>Decrement</button>
    </div>
  );
}

export default App;
