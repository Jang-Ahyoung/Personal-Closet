import React from 'react';
import styles from './CodiRecord.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDay, faEdit } from "@fortawesome/free-solid-svg-icons";

function CodiRecord() {
    return (
        <div className={styles.container}>
            <p className={styles.codititle}>💛 My Codi Record 💛</p>
            <div className={styles.codiContainer}>
                <div className={styles.dateContainer}>
                    <div>
                        <FontAwesomeIcon icon={faCalendarDay} className={styles.dateIcon} />
                        <span className={styles.date}>2020.06.10</span>
                    </div>
                    <FontAwesomeIcon icon={faEdit} className={styles.dateIcon} />
                </div>
                <hr className={styles.line}></hr>

                <div className={styles.clothesContainer}>
                    <p className={styles.clothesCategory}>Top</p>
                    <div className={styles.clothesTop}>
                        <div className={styles.clothesInfo}>
                            <p className={styles.clothesName}>White Blouse</p>
                        </div>
                        <p className={styles.clothesPrice}>\ 30,000</p>
                    </div>
                    <div className={styles.clothesBottom}>
                        <img className={styles.clothesImage} src="img/cloth/dress.jpg" ></img>
                        <img className={styles.clothesImage} src="img/cloth/round_shirt.png" ></img>
                    </div>
                </div>
                <hr className={styles.line}></hr>

                <div className={styles.clothesContainer}>
                    <p className={styles.clothesCategory}>Acc</p>
                    <div className={styles.clothesTop}>
                        <div className={styles.clothesInfo}>
                            <p className={styles.clothesNum}>No Extras</p>
                        </div>
                    </div>
                </div>
                <hr className={styles.line}></hr>

                <div className={styles.priceContainer}>
                    <p>코디 착장 합계</p>
                    <p className={styles.totalPrice}>\ 30,000</p>
                </div>
                <hr className={styles.line}></hr>

                <div className={styles.clothesContainer}>
                    <div className={styles.clothesTop}>
                        <p className={styles.codiLabel}>비슷한 코디 추천 🧡</p>
                    </div>
                    <div className={styles.clothesBottom}>
                        <img className={styles.codiImage} src="img/cloth/dress2.jpg" ></img>
                        <img className={styles.codiImage} src="img/cloth/trannings.jpg" ></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CodiRecord;
