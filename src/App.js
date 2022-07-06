import React from 'react';
import AntTrail from './components/AntTrail';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AntTrail current={3} totalCount={20}/>
      </header>
    </div>
  );
}

export default App;
