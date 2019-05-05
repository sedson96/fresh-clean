import React, {Component} from "react"
import Schedule from "../Schedule/Schedule";

class Dashboard extends Component {
    render() {
        return (
        <div>
            <h1>Dashboard Page</h1>
            <Schedule/>
        </div>
        )
    }
}

export default Dashboard