import React, {Component} from "react"
import FrontContact from "../FrontContact/FrontContact";
import FrontAbout from "../FrontAbout/FrontAbout";

class Dashboard extends Component {
    constructor() {
        super() 
    }
    render() {
        return (
        <div>
            <h1>Dashboard Page</h1>
            <FrontAbout/>
            <FrontContact/>
        </div>
        )
    }
}

export default Dashboard