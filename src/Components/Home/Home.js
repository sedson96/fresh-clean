import React, {Component} from "react"
import FrontContact from "../FrontContact/FrontContact";
import FrontAbout from "../FrontAbout/FrontAbout";
import {Redirect} from "react-router-dom"
import {connect} from "react-redux"
import {getSession} from "../../ducks/authReducer"
import styles from "./Home.module.scss"

class Home extends Component {
    componentDidMount() {
        this.props.getSession()
    }
    render() {
        return (
            <div>
            {this.props.username ? <Redirect to="/admin" /> :
            <>
            <div className={styles.intro} id="home"></div>
            <FrontAbout/>
            <div className={styles.waves}>
                <svg viewBox="0 0 120 28">
                    <defs>
                        <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
                    </defs> 

                    <use id="wave3" className={styles.wave}  x="0" y="-2" ></use> 
                    <use id="wave2" className={styles.wave}  x="0" y="0" ></use>    
                    <use id="wave1" className={styles.wave}  x="0" y="1" />
                </svg>
            </div>
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