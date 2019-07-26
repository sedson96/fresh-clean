import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.scss";

function AdminNav () {
    return (
        <nav style={{background: "#E567E0"}} className="navbar navbar-default navbar-expand-lg  fixed-top navbar-light ">
            <div className="navbar-brand brand">
                <i className="fas fa-broom"></i>
                <h1 className="logo">Fresh Clean</h1>
            </div>
             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <a className="nav-link" href="#home">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li> 
                            <Link to="/login"><button className="btn btn-secondary">login</button></Link>
                        </ul>  
                </div>
         </nav>

    )
}

export default AdminNav