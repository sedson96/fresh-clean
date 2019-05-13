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
        console.log(this.props)
        const weekList = this.props.weeks.map(week => {
             const start = new Date(week.week_start).toDateString()
             const end = new Date(week.week_end).toDateString()
            return (
                <>
                <input 
                onClick={this.handleClick}
                type="radio" id={week.week_id}
                 name="weekID" value={week.week_id}/>
                <label htmlFor={week.week_id}>{start}-{end}</label>
                {/* //  <label onClick={this.handleClick} key={week.week_id} name="weekID" value={week.week_id}> {week.week_start}-{week.week_end} </radio> */}
                </>
            )
        })
        return (
            <div className={styles.schedulebody}>
                <aside className={styles.past}>
                    {weekList}
                </aside>
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