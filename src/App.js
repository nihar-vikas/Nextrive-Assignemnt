import React, { useCallback } from 'react';
import './App.css';
import Timer from './components/timer';

function App() {
  const timer = useCallback(() => <Timer />, []);
  return (
    <div className="App">
      {timer()}
    </div>
  );
}

export default App;
