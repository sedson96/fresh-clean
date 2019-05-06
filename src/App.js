import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom" 
import routes from './routes';
import Navbar from './components/Navbar/Navbar';
import AddUser from './components/AddUser/AddUser';

function App() {
  return (
     <BrowserRouter>
        <div className="App">
        <Navbar />
         {routes}
       </div>
     </BrowserRouter>
  );
}

export default App;
