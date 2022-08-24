import React from 'react';
import Header from './components/Header';
import Switches from './components/Switches';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switches />
      </main>
    </div>
  );
};

export default App;
