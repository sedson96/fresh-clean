import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom" 
import routes from './routes';
import Navbar from './Components/Navbar/Navbar';
import Invoices from "./Components/Invoices/Invoices"

function App() {
  return (
     <>
    // <BrowserRouter>
    {/* //    <div className="App"> */}
        <Navbar />
    {/* //     {routes}
    //   </div> */}
    // </BrowserRouter>
    <Invoices/> 
    </>
  );
}

export default App;
