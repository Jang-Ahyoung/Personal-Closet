import React from 'react'
import styles from './ClothDetail.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronRight, faPencilAlt, faCalendarCheck } from "@fortawesome/free-solid-svg-icons";

function ClothDetail() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <FontAwesomeIcon icon={faChevronRight} />
            </header>
            <img className={styles.cloth} src="/img/3.jpg"></img>
            <div className={styles.info}>

                <div className={styles.top}>
                    <h2 className={styles.title}>white blouse</h2>
                    <div className={styles.price}> $ 210</div>
                </div>
                <div className={styles.middle}>
                    <div className={styles.category}>TOP <span className={styles.num}>(20)</span></div>
                    <div className={styles.category}>SIZE <span className={styles.size}>M</span></div>
                </div>
                <div className={styles.bottomContainer}>
                    <button className={styles.bottom}>
                        <FontAwesomeIcon icon={faPencilAlt} className={styles.icon} />
                        evert</button>
                    <button className={styles.bottom}>
                        <FontAwesomeIcon icon={faCalendarCheck} className={styles.icon} />
                        Codi 기록</button>
                </div>
            </div>
        </div>
    )
}

export default ClothDetail
