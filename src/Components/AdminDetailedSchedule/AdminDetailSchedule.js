import React, {Component} from "react"
import styles from "./AdminDetailSchedule.module.scss"
import {connect} from "react-redux"
import Building from "../Building/Building";
import { getAdminSchedule } from "../../ducks/scheduleReducer";

class AdminDetailSchedule extends Component {
    componentDidMount() {
        this.props.getAdminSchedule()
    }
    render () {
        console.log(this.props)
        const buildings = this.props.schedule.map((building,i) => {
            if(building.week_id === +this.props.weekID) {
                return <Building  key={i}/>
            } 
        })
        console.log(buildings)
        return (
            <>
            {buildings}
            </>
        )
    }
}
function mapStatetoProps (reduxState) {
    return {
        schedule: reduxState.schedule.schedule,
    }
}
export default connect(mapStatetoProps, {getAdminSchedule})(AdminDetailSchedule)