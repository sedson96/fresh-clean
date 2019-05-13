import React, {Component} from "react" 
import styles from "./Schedule.module.scss"
import {connect} from "react-redux"

class Schedule extends Component {
   render() {
       console.log(this.props)
       const buildings = this.props.schedule.filter(building => {
        if(building.week_id === +this.props.weekID) return building
    })
    const monday = buildings.map(building => {
        if(building.monday) return <li>{building.name}</li>
    })
    const tuesday = buildings.map(building => {
        if(building.tuesday) return <li>{building.name}</li>
    })
    const wednesday = buildings.map(building => {
        if(building.wednesday) return <li>{building.name}</li>
    })
    const thursday = buildings.map(building => {
        if(building.thurday) return <li>{building.name}</li>
    })
    const friday = buildings.map(building => {
        if(building.friday) return <li>{building.name}</li>
    })
       return (
           <div className={styles.schedulebody}>
           <article className={styles.schedule}>
               <div className={styles.dayright}>    
                    <div className={styles.monday}>
                        <h1>Monday</h1>
                    </div>
                        <ul className={styles.list}>
                            {monday}
                        </ul>
                    </div>
                    <div className={styles.days}>
                        <div className={styles.tuesday}>
                            <h1>Tuesday</h1>
                        </div>
                        <ul className={styles.list}>
                            {tuesday}
                        </ul>
                    </div>
                    <div className={styles.days}>
                        <div className={styles.wednesday}>
                            <h1>Wednesday</h1>
                        </div>
                        <ul className={styles.list}>
                            {wednesday}
                        </ul>
                    </div>
                    <div className={styles.days}>
                        <div className={styles.thursday}>
                            <h1>Thursday</h1>
                        </div>
                        <ul className={styles.list}>
                            {thursday}
                        </ul>
                    </div>
                    <div className={styles.dayleft}>
                        <div className={styles.friday}>
                            <h1>Friday</h1>
                        </div>
                        <ul className={styles.list}>
                            {friday}
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
         schedule: reduxState.schedule.schedule,
         current: reduxState.schedule.current,
     }
 }
export default connect(mapStatetoProps)(Schedule)