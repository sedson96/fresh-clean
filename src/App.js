import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom" 
import routes from './routes';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
     <BrowserRouter>
        <div className="App">
         {routes}
        <Navbar />
       </div>
     </BrowserRouter>
  );
}

export default App;
