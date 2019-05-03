import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from "react-router-dom" 
import routes from './routes';
import Navbar from './Components/Navbar/Navbar';
import Schedule from './Components/Schedule/Schedule';

function App() {
  return (
    <HashRouter>
    {/* //   <div className="App"> */}
      <Navbar />
    {/* //   {routes} */}
    {/* //   </div> */}
    <Schedule />
    </HashRouter>

  );
}

export default App;
