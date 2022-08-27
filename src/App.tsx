import React from 'react';
import io from 'socket.io-client';

import Header from './components/Header';
import Switches from './containers/Switches';

const App = () => {
  const socket = io();
  
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Switches socket={socket} />
      </main>
    </div>
  );
};

export default App;
