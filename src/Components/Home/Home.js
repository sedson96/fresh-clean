import React, {Component} from "react"
import FrontContact from "../FrontContact/FrontContact";
import FrontAbout from "../FrontAbout/FrontAbout";
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {getSession} from "../../ducks/authReducer"
import styles from "./Home.module.scss"

class Home extends Component {
    constructor() {
        super() 
    }
    componentDidMount() {
        this.props.getSession()
    }
    render() {
        return (
            <div>
            {this.props.username ? <Redirect to="/admin" /> :
            <>
            <div className={styles.intro}></div>
            <FrontAbout/>
            <FrontContact/>
            </>}
        </div>
        )
    }
}
function mapStateToProps (state) {
    return {
        username: state.auth.username,
        isAdmin: state.auth.isAdmin
    }
}
export default connect(mapStateToProps,{getSession})(Home)