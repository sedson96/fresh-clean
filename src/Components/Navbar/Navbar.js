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
                <i class="fas fa-broom"></i>
                <h1 className="logo">Fresh Clean</h1>
            </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul class="navbar-nav ">
                    <li class="nav-item active">
                    <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                    </li>
                    
                    {this.props.username ? <button onClick={this.logout}>logout</button> : <Link to="/login"><button className="btn btn-primary">login</button></Link>}
                </ul>
                </div>
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