import React, { useState } from 'react'
import styles from './Clothes.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BackArrowHeader from '../backArrowHeader/BackArrowHeader';

function Clothes(props) {
    const [categoty, setCategoty] = useState(props.location.state.categoty);
    const categotyArray = ["All", "Top", "Pants", "Dress", "Acc"];
    const imgArray = ["/cloth/knit.jpg", "/acc.jpg"]
    const [searchText, setSearchText] = useState(null);

    return (
        <div className={styles.container}>
            <BackArrowHeader />
            <div className={styles.inputContainer}>
                <FontAwesomeIcon className={styles.inputIcon} icon={faSearch} />
                <input className={styles.input} type="text" placeholder="검색어를 입력해주세요 . . ." onChange={(e) => setSearchText(e.target.value)}></input>
            </div>
            <div className={styles.categoryContainer} >
                {categotyArray.map((kind, index) => {
                    return <button key={index} onClick={() => setCategoty(categotyArray[index])} className={kind === categoty ? `${styles.categoryBtn} ${styles.seletBtn}` : `${styles.categoryBtn}`} >{kind}</button>
                })}
            </div>

            <img className={styles.coverImg} src={`img${categoty != 'Acc' ? imgArray[0] : imgArray[1]}`}></img>
            <p className={styles.coverText}>{categoty == 'All' ? categoty : `My cuty ${categoty}`}</p>

            <div className={styles.filterContainer}>
                <div className={styles.filter}>
                    <p className={styles.filterSelect}>New</p>
                    <p className={styles.filterText}>HighPrice</p>
                    <p className={styles.filterText}>Favor</p>
                </div>
                <Link to="/categoryExpand">
                    <FontAwesomeIcon icon={faExpandAlt} className={styles.expandIcon} />
                </Link>
            </div>

            <div className={styles.produtContainer}>
                <Link to="/test" style={{ textDecoration: "none" }}>
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
            </div>
        </div >
    )
}

export default Clothes
