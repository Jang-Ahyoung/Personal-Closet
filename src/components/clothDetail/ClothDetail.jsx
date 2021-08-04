import React from 'react'
import styles from "./ClothDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudMoon } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import BackArrowHeader from '../backArrowHeader/BackArrowHeader';

function ClothDetail() {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <div className={styles.mainSection}>
                <BackArrowHeader />
                <div className={styles.top}>
                    <p className={styles.title}>OBEY Woven Shirt</p>
                    <section className={styles.middle}>
                        <div className={styles.category} onClick={() => history.goBack()} > TOP <span > (45) </span></div>
                        <div className={styles.price}> $ 70 </div>
                    </section>
                </div>
                <div className={styles.bottom}>
                    <img className={styles.ProdectImg} src="/img/background.jpg" alt="clothImg" />
                    <div className={styles.ProductDesc}>
                        <section className={styles.section}>
                            <div className={styles.size}>S</div>
                            <div className={`${styles.size} ${styles.choose}`}>M</div>
                            <div className={styles.size}>L</div>
                            <div className={styles.size}>XL</div>
                        </section>
                        <section className={styles.colorContainer}>
                            <div className={styles.color}></div>
                        </section>
                    </div>
                </div>
            </div>

            <div className={styles.sideSection}>
                <div className={styles.codiContainer}>
                    <div className={styles.codiDate}> 2021 / 03 / 04</div>
                    <div className={styles.codiProduct}>
                        <img className={styles.codiImg} src="img/cloth/round_shirt.png"></img>
                        <span className={styles.codiName}>흰 린넨 셔츠</span>
                    </div>
                    <div className={styles.codiProduct}>
                        <img className={styles.codiImg} src="img/cloth/pants.jpg"></img>
                        <span className={styles.codiName}>청바지</span>
                    </div>
                    <div className={styles.codiProduct}>
                        <img className={styles.codiImg} src="img/cloth/round_shirt.png"></img>
                        <span className={styles.codiName}>밀집 미니백</span>
                    </div>
                    <div className={styles.codiBottom}>
                        <FontAwesomeIcon icon={faCloudMoon} className={styles.weatherIcon} onClick={() => history.goBack()} />
                        <div className={styles.codiPrice}> Total : $ <i> 450</i></div>
                    </div>
                </div>
                <div className={styles.codiContainer}>
                    <div className={styles.codiDate}> 2021 / 03 / 04</div>
                    <div className={styles.codiProduct}>
                        <img className={styles.codiImg} src="img/cloth/round_shirt.png"></img>
                        <span className={styles.codiName}>흰 린넨 셔츠</span>
                    </div>
                    <div className={styles.codiProduct}>
                        <img className={styles.codiImg} src="img/cloth/pants.jpg"></img>
                        <span className={styles.codiName}>청바지</span>
                    </div>
                    <div className={styles.codiProduct}>
                        <img className={styles.codiImg} src="img/cloth/round_shirt.png"></img>
                        <span className={styles.codiName}>밀집 미니백</span>
                    </div>
                    <div className={styles.codiBottom}>
                        <FontAwesomeIcon icon={faCloudMoon} className={styles.weatherIcon} onClick={() => history.goBack()} />
                        <div className={styles.codiPrice}> Total : $ <i> 450</i></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ClothDetail
