import React from "react" 
import  styles from "./FrontAbout.module.scss"

function FrontAbout () {
    return (
        <main className={styles.stuff}>
            <article className={styles.row1}>
                <h1>Get Your Office Cleaned Today!</h1>
            </article>
            <article className={styles.row2} id="about">
            </article>
            <article className={styles.row3}>
                <p>Get your office cleaned with best in class service with Fresh Clean. Maintaing cleanliness for hundreds of office buildings. You wont be disapointed</p>
            </article>
        </main>
    )
}

export default FrontAbout;