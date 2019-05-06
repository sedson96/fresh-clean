import React from "react"
import {Link} from "react-router-dom"
import "./Navbar.scss";

function AdminNav (props) {
    return (
        <nav className="navbar navbar-default navbar-expand-lg  fixed-top navbar-light bg-light">
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
                        <Link to="/admin/"><h5 className="nav-link">Dashboard <span className="sr-only">(current)</span></h5></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/invoice"><h5 className="nav-link">Invoice</h5></Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/admin/account"><h5 className="nav-link">Account</h5></Link>
                    </li>
                <button onClick={props.logout}>logout</button>
            </ul>
            </div>
         </nav>

    )
}

export default AdminNav