import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import Rota from './components/routes';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Rota />
        </div>
      </Router>
    </div>
  );
}

export default App;
