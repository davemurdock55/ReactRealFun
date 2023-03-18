import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootswatch/dist/cosmo/bootstrap.min.css';
import Heading from './components/Heading';
import TeamList from './components/TeamList';
import Team from './components/Team';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Heading />
        <TeamList />
      </header>

    </div>
  );
}

export default App;
