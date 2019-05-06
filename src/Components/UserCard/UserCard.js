import React, {Component} from "react";
import styles from "./UserCard.module.scss"

class UserCard extends Component {
    render() {
        return(
            <>
            <article className={styles.userCard}>
                <div>
                    <h1>Marisa Garza</h1>
                    <h4>123-456-7890</h4>
                </div>
                <div>
                    <h2 className={styles.buildings}>Buildings: 4</h2>
                </div>
            </article>
            <article className={styles.userCard}>
                <div>
                    <h1>Marisa Garza</h1>
                    <h4>123-456-7890</h4>
                </div>
                <div>
                    <h2 className={styles.buildings}>Buildings: 4</h2>
                </div>
            </article>
            <article className={styles.userCard}>
                <div>
                    <h1>Marisa Garza</h1>
                    <h4>123-456-7890</h4>
                </div>
                <div>
                    <h2 className={styles.buildings}>Buildings: 4</h2>
                </div>
            </article>
            <article className={styles.userCard}>
                <div>
                    <h1>Marisa Garza</h1>
                    <h4>123-456-7890</h4>
                </div>
                <div>
                    <h2 className={styles.buildings}>Buildings: 4</h2>
                </div>
            </article>
            <article className={styles.userCard}>
                <div>
                    <h1>Marisa Garza</h1>
                    <h4>123-456-7890</h4>
                </div>
                <div>
                    <h2 className={styles.buildings}>Buildings: 4</h2>
                </div>
            </article>
            </>
        )
    }
}

export default UserCard