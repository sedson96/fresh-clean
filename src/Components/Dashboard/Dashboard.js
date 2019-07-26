import React, {Component} from "react"
import {connect} from "react-redux"
import Schedule from "../Schedule/Schedule";
import styles from "../Schedule/Schedule.module.scss"
import { getWeeks, getSchedule, getWeek} from "../../ducks/scheduleReducer" 


class Dashboard extends Component {
    constructor() {
        super() 
        this.state = {
            weekID: null
        }
    }
    async componentDidMount() {
        await this.props.getWeek();
        this.props.getWeeks();
        this.props.getSchedule();
        this.setState({weekID: this.props.current})

    }
    handleClick = event => {
        this.setState({weekID: event.target.value})
    }
    render() {
        const weekList = this.props.weeks.map(week => {
             const start = new Date(week.week_start).toDateString()
             const end = new Date(week.week_end).toDateString()
            return (
                <>
                <input 
                onClick={this.handleClick}
                className={styles.radio}
                type="radio" id={week.week_id}
                 name="weekID" value={week.week_id}/>
                <label htmlFor={week.week_id}>{start}-{end}</label>
                </>
            )
        })
        const dropdown = this.props.weeks.map(week => {
            const start = new Date(week.week_start).toDateString()
            const end = new Date(week.week_end).toDateString()
               return (
                    <option key={week.week_id} value={week.week_id}>{start}-{end}</option>
               )
           })
        return (
            <div className={styles.schedulebody}>
            <div className={styles.placeholder}></div>
                <aside className={styles.past}>
                    {weekList}
                </aside>
                <select className={styles.select} onChange={this.handleClick}>
                        <option selected="defaultValue">Choose Date</option>
                        {dropdown}
                </select>
                <Schedule weekID={this.state.weekID}/>
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
export default connect(mapStatetoProps,{getWeeks,getSchedule, getWeek})(Dashboard)