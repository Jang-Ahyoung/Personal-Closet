import React from 'react'
import styles from "./ClothDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherAlt, faCloudMoon, faHeart, faShoppingCart, faMoneyBillWave, faUserAstronaut, faStore, faTshirt, faUserTag } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import BackArrowHeader from '../backArrowHeader/BackArrowHeader';

function ClothDetail() {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <BackArrowHeader />
                <div className={styles.header}>
                    <p className={styles.title}>OBEY Woven Shirt</p>
                    <FontAwesomeIcon icon={faFeatherAlt} className={styles.revertIcon} onClick={() => history.push('/clothesUpdate')} />
                </div>

                <section className={styles.middle}>
                    <div className={styles.category} onClick={() => history.goBack()} > TOP <span > (45) </span> / 면 티셔츠 <span > (4) </span> </div>
                    <div className={styles.price}> $ 70 </div>
                </section>
            </div>
            <div className={styles.bottom}>
                <div className={styles.mainSection}>
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

                <div className={styles.side}>
                    <div>
                        <div className={styles.favor}>
                            <progress value="22" max="100"></progress><span>선호도</span>
                        </div>
                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <div className={styles.heartIcon}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </div>
                                <div className={styles.detail}>
                                    <div className={styles.detailTitle}>착용 횟수</div>
                                    <div className={styles.detailText}>52</div>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.cartIcon}>
                                    <FontAwesomeIcon icon={faShoppingCart} />
                                </div>
                                <div className={styles.detail}>
                                    <div className={styles.detailTitle}>구매 일자</div>
                                    <div className={styles.detailText}>2021/03/04</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <div className={styles.tshirtIcon}>
                                    <FontAwesomeIcon icon={faTshirt} />
                                </div>
                                <div className={styles.detail}>
                                    <div className={styles.detailTitle}>소재</div>
                                    <div className={styles.detailText}>면</div>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.storeIcon}>
                                    <FontAwesomeIcon icon={faStore} />
                                </div>
                                <div className={styles.detail}>
                                    <div className={styles.detailTitle}>브랜드</div>
                                    <div className={styles.detailText}>JARA</div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.infoContainer}>
                            <div className={styles.info}>
                                <div className={styles.sizeIcon}>
                                    <FontAwesomeIcon icon={faUserTag} />
                                </div>
                                <div className={styles.detail}>
                                    <div className={styles.detailTitle}>사이즈</div>
                                    <div className={styles.detailText}>M</div>
                                </div>
                            </div>
                            <div className={styles.info}>
                                <div className={styles.moneyIcon}>
                                    <FontAwesomeIcon icon={faMoneyBillWave} />
                                </div>
                                <div className={styles.detail}>
                                    <div className={styles.detailTitle_small}>평균 코디 비용</div>
                                    <div className={styles.detailText}>\ 45000</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.bottomContainer}>
                        <div className={styles.sideTitle}>
                            <FontAwesomeIcon icon={faUserAstronaut} className={styles.codiIcon} />
                            <span>Codi List</span>
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
                </div>
            </div></div>
    )
}

export default ClothDetail;
