import React, {Component} from "react" 
import styles from "./Schedule.module.scss"
import {connect} from "react-redux"
import {currentSchedule} from "../../ducks/scheduleReducer" 

class Schedule extends Component {
    constructor() {
        super()  
   }
   componentDidMount() {
       this.props.currentSchedule()
   }
   render() {
       console.log(this.props)
       return (
           <div className={styles.schedulebody}>
           <aside className={styles.past}>
           </aside>
           <article className={styles.schedule}>
               <div className={styles.dayright}>    
                    <div className={styles.monday}>
                        <h1>Monday</h1>
                    </div>
                        <ul className={styles.list}>
                            <li>Dentist Office</li>
                            <li>Gastrointologist</li>
                        </ul>
                    </div>
                    <div className={styles.days}>
                        <div className={styles.tuesday}>
                            <h1>Tuesday</h1>
                        </div>
                        <ul className={styles.list}>
                        </ul>
                    </div>
                    <div className={styles.days}>
                        <div className={styles.wednesday}>
                            <h1>Wednesday</h1>
                        </div>
                        <ul className={styles.list}>
                            <li>Dentist Office</li>
                            <li>Gastrointologist</li>
                        </ul>
                    </div>
                    <div className={styles.days}>
                        <div className={styles.thursday}>
                            <h1>Thursday</h1>
                        </div>
                        <ul className={styles.list}>
                        </ul>
                    </div>
                    <div className={styles.dayleft}>
                        <div className={styles.friday}>
                            <h1>Friday</h1>
                        </div>
                        <ul className={styles.list}>
                            <li>Dentist Office</li>
                            <li>Gastrointologist</li>
                        </ul>
                    </div>
           </article>
           <div className={styles.test}></div>
           </div>
           )
   }
}

 function mapStatetoProps (reduxState) {
     return {
         current: reduxState.schedule.current,
         schedule: reduxState.schedule.schedule
     }
 }
export default connect(mapStatetoProps,{currentSchedule})(Schedule)