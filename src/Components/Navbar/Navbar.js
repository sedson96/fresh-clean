import React , {Component} from "react" 
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import axios from "axios";
import {getSession} from "../../ducks/authReducer"
import  "./Navbar.scss"


class Navbar extends Component {
    logout = () => {
        axios.delete("auth/logout", {username: this.props.username})
        this.props.getSession()
    }
    render(){
        return (
            <nav className="navbar navbar-expand-lg  fixed-top navbar-light bg-light">
            <div className="navbar-brand brand">
                <i className="fas fa-broom"></i>
                <h1 className="logo">Fresh Clean</h1>
            </div>
                {!this.props.username ? 
                <>
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
                    <Link to="/login"><button className="btn btn-primary">login</button></Link>
                    </ul>
                    </div>
                </>
                    :
                <>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav ">
                    <li className="nav-item active">
                    <Link to="/client"><h5 className="nav-link">Dashboard <span className="sr-only">(current)</span></h5></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/client/invoice"><h5 className="nav-link">Invoice</h5></Link>
                    </li>
                    <li className="nav-item">
                    <Link to="/client/account"><h5 className="nav-link">Account</h5></Link>
                    </li>
                    <button onClick={this.logout}>logout</button>
                 </ul>
                 </div>
                 </>
                }
            </nav>
        )
    }
}
function mapStateToProps (state) {
    return {
        username: state.auth.username,
        isAdmin: state.auth.isAdmin
    }
}
export default connect(mapStateToProps, {getSession})(Navbar)