import React, {Component} from "react" 
import styles from "./Building.module.scss"


class Building extends Component {
    render() {
        return (
        <div className={styles.detail}>
                    <i class="far fa-minus-square"></i>
            <h1>Building Name</h1>
            <div className={styles.days}>
                <div className={styles.checks}>
                    <label>Monday</label>
                    <input type="checkbox" />
                </div>
                <div className={styles.checks}>
                    <label>Tuesday</label>
                    <input type="checkbox" />
                </div>
                <div className={styles.checks}>
                    <label>Wednesday</label>
                    <input type="checkbox" />
                </div>
                <div className={styles.checks}>
                    <label>Thursday</label>
                    <input type="checkbox" />
                </div>
                <div className={styles.checks}>
                    <label>Friday</label>
                    <input type="checkbox" />
                </div>
            </div>
        </div>
        )
    }
}

export default Building 