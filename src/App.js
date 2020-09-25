import React from 'react';
import Header from './components/header/Header';
import Home from './pages/Home';
import './styles/styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Home />
      </div>
    </div>
  );
}

export default App;
