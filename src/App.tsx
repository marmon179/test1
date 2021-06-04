import React from 'react';
import './App.css';
import Header from './pages/header/Header';
import {Routes} from './pages/Routes';

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes/>
    </div>
  );
}

export default App;
