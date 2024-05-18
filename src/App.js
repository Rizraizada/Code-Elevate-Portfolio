import React from 'react';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import Service from './components/service';

import './App.css';
import JoinUs from './components/joinUs';
import Consultant from './components/consultant';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
        <Service />
        <JoinUs />
        <Consultant />



     </div>
  );
}

export default App;
