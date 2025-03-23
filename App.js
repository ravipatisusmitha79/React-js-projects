import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
 <center className='main'>
 <h1>Counter app</h1>
 <h2>{count}</h2>
 {/* <button onClick={()=>setCount(count+1)}>Increment</button>
 <button onClick={()=>setCount(0)}>Reset</button>
 <button onClick={()=>setCount(count>0 ? count-1 :0)}>Decrement</button> */}
 <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
 <button onClick={() => setCount(0)}>Reset</button>
      <button onClick={() => setCount(prevCount => Math.max(prevCount - 1, 0))}>Decrement</button>
 </center>
  );
}

export default App;
