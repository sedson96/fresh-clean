import React, {Component} from "react" 
import styles from "./AdminSchedule.module.scss"
import {connect} from "react-redux"
import {currentSchedule, getWeeks, getAdminSchedule} from "../../ducks/scheduleReducer" 
import AdminSimpleSchedule from "../AdminSimpleSchedule/AdminSimpleSchedule";

class AdminSchedule extends Component {
    constructor() {
        super() 
        this.state = {
            simple: true,
            weekID: null
        }
    }
   async componentDidMount() {
       await this.props.currentSchedule()
       this.props.getWeeks()
       this.props.getAdminSchedule()
       this.setState({weekID: this.props.current[0].week_id})
   }
   handleClick = event => {
       if(this.state.simple) {
           this.setState({simple: false})
       } else {
        this.setState({simple: true})
       }
   } 
   handleChange = event => {
       this.setState({weekID: event.target.value})
   } 
   render() {
       console.log(this.props)
       const dropdown = this.props.weeks.map(week => {
           return (
                <option key={week.week_id} value={week.week_id}>{week.week_start}-{week.week_end}</option>
           )
       })
       return (
           
            <div className={styles.schedulebody}>
                <div>
                    <select onChange={this.handleChange}>
                     <option selected="defaultValue">Choose Date</option>
                       {dropdown}
                    </select>
                    {this.state.simple ? 
                        <button onClick={this.handleClick}>Simple</button> : 
                        <button onClick={this.handleClick}>Detailed</button>}
                </div>
                {this.state.simple ? 
                    <AdminSimpleSchedule weekID={this.state.weekID}/> :
                    <h4>Detailed list</h4>}
            </div>
           )
   }
}

 function mapStatetoProps (reduxState) {
     return {
         current: reduxState.schedule.current,
         schedule: reduxState.schedule.schedule,
         weeks: reduxState.schedule.weeks
     }
 }
export default connect(mapStatetoProps,{currentSchedule, getWeeks,getAdminSchedule})(AdminSchedule)