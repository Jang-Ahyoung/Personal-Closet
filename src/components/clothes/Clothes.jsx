import React, { useState } from 'react'
import styles from './Clothes.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Clothes(props) {
    const categoty = props.location.state.categoty;
    const categotyArray = ["All", "Top", "Pants", "Dress", "Acc", "Pants", "Dress", "Acc"];
    const [searchText, setSearchText] = useState(null);

    return (
        <div className={styles.container}>
            <header>header ^^ </header>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon className={styles.inputIcon} icon={faSearch} />
                <input className={styles.input} type="text" placeholder="검색어를 입력해주세요 . . ." onChange={(e) => setSearchText(e.target.value)}></input>
            </div>
            <div className={styles.categoryContainer}>
                {/* {categotyArray.map((kind) => {
                    <button className={kind === categoty ? `${styles.categoryBtn} ${styles.seletBtn}` : `${styles.categoryBtn}`}>dsjsdkjfh</button>
                })} */}
                <button className={`${styles.categoryBtn} ${styles.seletBtn}`}>All</button>
                <button className={styles.categoryBtn}>Top</button>
                <button className={styles.categoryBtn}>Pants</button>
                <button className={styles.categoryBtn}>Dress</button>
                <button className={styles.categoryBtn}>Acc</button>
                <button className={styles.categoryBtn}>Pants</button>
                <button className={styles.categoryBtn}>Dress</button>
                <button className={styles.categoryBtn}>Acc</button>
            </div>

            <div className={styles.produtContainer}>
                <Link to="/clothDetail" style={{ textDecoration: "none" }}>
                    <div className={styles.produt}>
                        <img className={styles.produtPhoto} alt="produtImg" src="img/cloth/white_shirt.png"></img>
                        <div className={styles.produtDetail}>
                            <div className={styles.detailTop}>
                                <p className={styles.name}>Orange point T-shirt</p>
                                <span className={styles.brandName}>Adidas</span>
                            </div>
                            <div className={styles.detailBottom}>
                                <span className={styles.tags}>#운동 #편안함</span>
                                <div className={styles.lastDate}>최근 착용 : 2021/02/10</div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/clothDetail" style={{ textDecoration: "none" }}>
                    <div className={styles.produt}>
                        <img className={styles.produtPhoto} src="img/cloth/round_shirt.png" alt="produtImg"></img>
                        <div className={styles.produtDetail}>
                            <div className={styles.detailTop}>
                                <p className={styles.name}>White T-shirt</p>
                                <span className={styles.brandName}>Adidas</span>
                            </div>
                            <div className={styles.detailBottom}>
                                <span className={styles.tags}>#운동 #편안함</span>
                                <div className={styles.lastDate}>최근 착용 : 2021/02/10</div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/clothDetail" style={{ textDecoration: "none" }}>
                    <div className={styles.produt}>
                        <img className={styles.produtPhoto} src="img/cloth/blackShirt.png" alt="produtImg"></img>
                        <div className={styles.produtDetail}>
                            <div className={styles.detailTop}>
                                <p className={styles.name}>Black shirt</p>
                                <span className={styles.brandName}>Adidas</span>
                            </div>
                            <div className={styles.detailBottom}>
                                <span className={styles.tags}>#운동 #편안함</span>
                                <div className={styles.lastDate}>최근 착용 : 2021/02/10</div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/clothDetail" style={{ textDecoration: "none" }}>
                    <div className={styles.produt}>
                        <img className={styles.produtPhoto} src="img/cloth/blackShirt.png" alt="produtImg"></img>
                        <div className={styles.produtDetail}>
                            <div className={styles.detailTop}>
                                <p className={styles.name}>Black shirt</p>
                                <span className={styles.brandName}>Adidas</span>
                            </div>
                            <div className={styles.detailBottom}>
                                <span className={styles.tags}>#운동 #편안함</span>
                                <div className={styles.lastDate}>최근 착용 : 2021/02/10</div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/clothDetail" style={{ textDecoration: "none" }}>
                    <div className={styles.produt}>
                        <img className={styles.produtPhoto} src="img/cloth/blackShirt.png" alt="produtImg"></img>
                        <div className={styles.produtDetail}>
                            <div className={styles.detailTop}>
                                <p className={styles.name}>Black shirt</p>
                                <span className={styles.brandName}></span>
                            </div>
                            <div className={styles.detailBottom}>
                                <span className={styles.tags}></span>
                                <div className={styles.lastDate}>최근 착용 : 2021/02/10</div>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Clothes
