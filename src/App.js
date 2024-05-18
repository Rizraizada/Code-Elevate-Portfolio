import React from 'react';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Service from './components/service';

import './App.css';
import JoinUs from './components/joinUs';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
        <Service />
        <JoinUs />


     </div>
  );
}

export default App;
