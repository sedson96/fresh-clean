import React, {Component} from "react"
import styles from "./AdminDetailSchedule.module.scss"
import {connect} from "react-redux"
import Building from "../Building/Building";
import { getAdminSchedule,addSchedule } from "../../ducks/scheduleReducer";
import {getBuildings} from "../../ducks/buildingReducer"

class AdminDetailSchedule extends Component {
    state = {
        newId: ""
    }
    componentDidMount() {
        this.props.getBuildings()
    }
    handleChange = (event) => {
        this.setState({newId: event.target.value})
    }
    handleClick = (event) => {
        this.props.addSchedule(this.state.newId,this.props.weekID)
    }
    render () {
        const buildings = this.props.schedule.map((building,i) => {
            if(building.week_id === +this.props.weekID) {
                return <Building  
                 weekID={building.week_id}
                 name={building.name} 
                 monday={building.monday} 
                 tuesday={building.tuesday} 
                 wednesday={building.wednesday} 
                 thursday={building.thursday} 
                 friday={building.friday}
                 building={building.building_id}
                 key={i}/>
            } 
        })
        const dropdown = this.props.buildings.map(building => {
               return (
                    <option key={building.building_id} value={building.building_id}>{building.name}</option>
               )
        })
        return (
            <>
            {buildings}
            <div className={styles.new}>
                <select onChange={this.handleChange}>
                        <option selected="defaultValue">Add Building to Week</option>
                        {dropdown}
                </select>
                <i className="fas fa-plus" onClick={this.handleClick}></i>
            </div>
            </>
        )
    }
}
function mapStatetoProps (reduxState) {
    return {
        schedule: reduxState.schedule.schedule,
        buildings: reduxState.building.buildings
    }
}
export default connect(mapStatetoProps, {getAdminSchedule,getBuildings,addSchedule})(AdminDetailSchedule)