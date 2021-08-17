import React from 'react';
import styles from './CodiRecommend.module.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudRain, faCloudSun, faEye, faWind } from "@fortawesome/free-solid-svg-icons";

function CodiRecommend() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p className={styles.title}>오늘의 코디 추천</p>
                <p className={styles.topDescription}>짜잔-! 🎁 옷장 데이터를 바탕으로 오늘에 어울리는 코디를 추천해드려요</p>
            </div>

            <div className={styles.weather}>
                <div>
                    <p className={styles.location}>울산</p>
                    <p className={styles.temperature}>21/23 °C</p>
                    <div className={styles.weatherBottom}>
                        <FontAwesomeIcon icon={faWind} className={styles.Icon} />
                        <p className={styles.weatherDetailNum}>9km/h</p>
                        <FontAwesomeIcon icon={faCloudRain} className={styles.Icon} />
                        <p className={styles.weatherDetailNum}>50%</p>
                    </div>

                </div>
                <FontAwesomeIcon icon={faCloudSun} className={styles.weatherIcon} />
            </div>
            <div className={styles.codiContainer}>
                <div className={styles.codi}>
                    <p className={styles.codiDescription}>강수가 예상되는 오늘, <br />부츠와 함께 매치해보세요!</p>
                    <img className={styles.codiImage} src="img/cloth/mans.jpg" alt="codiImage" />
                </div>
                <div className={styles.codi}>
                    <p className={styles.codiDescription}>무더위에 힘들 수도 있어요, <br />시원한 린넨 소재 팬트와 반팔 코디 어떠세요?</p>
                    <img className={styles.codiImage} src="img/cloth/dress2.jpg" alt="codiImage" />
                </div>
            </div>
        </div >
    )
}

export default CodiRecommend;
