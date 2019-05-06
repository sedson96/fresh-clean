import React , {Component} from "react" 
import {Link} from "react-router-dom"
import {connect} from "react-redux"
import axios from "axios";
import {getSession} from "../../ducks/authReducer"
import  "./Navbar.scss"
import HomeNav from "./HomeNav";
import AdminNav from "./AdminNav";
import ClientNav from "./ClientNav";


class Navbar extends Component {
    logout = () => {
        axios.get("auth/logout", {username: this.props.username})
        this.props.getSession()
    }
    render(){
        return (
            <>
                {!this.props.username ? 
                <HomeNav/> :
                this.props.isAdmin ? 
                <AdminNav logout={this.logout}/> :
                <ClientNav logout={this.logout}/>
                }
            </>
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