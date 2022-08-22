import './App.css';
import React, { useState, useEffect } from 'react';
import Counter from './components/Counter';

function App() {
  const [showCounter, setShowCounter] = useState(true)
  return (
    <div className="App"> 
      <h1>Hello world</h1>
      <button onClick={()=> setShowCounter(showCounter => !showCounter)} >Show counter</button> 
      {showCounter && <Counter onChangeState={()=>showCounter} ></Counter>}     
    </div>
  );
}
export default App;
