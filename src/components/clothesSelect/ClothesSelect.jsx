import React, { useState } from 'react';
import styles from './ClothesSelect.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import SearchBar from '../searchBar/SearchBar';
import CLOTHES_DATA from '../../CLOTHES.json';

function ClothesSelect() {
    const [searchText, setSearchText] = useState(null);
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }
    let clothesData = searchText ? CLOTHES_DATA.filter((data) => data.name.toLowerCase().includes(searchText.toLowerCase())) : CLOTHES_DATA;
    const [smallCategory, setSmallCategory] = useState(0);
    const smallCategoryArray = ['전체', '나시/반팔', '티셔츠/맨투맨', '블라우스/셔츠', '니트', '스포츠웨어'];

    return (
        <div className={styles.conatiner}>
            <div className={styles.closeIcon} >
                <span>Top</span>
                <FontAwesomeIcon icon={faTimesCircle} className={styles.Icon} /></div>

            <div className={styles.section}>
                <SearchBar handleSearch={handleSearch} />
                <div className={styles.miniCategory}>
                    {
                        smallCategoryArray.map((categoty, index) => {
                            return <button className={`${styles.miniCategory_text} ${smallCategory == index && styles.seleted}`} onClick={() => setSmallCategory(index)}>{categoty}</button>
                        })
                    }
                </div>
                <div className={styles.productContainer}>
                    {
                        clothesData.map((data) =>
                            <div className={styles.product}>
                                <div className={styles.imgContainer}>
                                    <img className={styles.productImg} src="img/cloth/dress.jpg"></img>
                                </div>
                                <div className={styles.productDesc}>
                                    <div>
                                        <p className={styles.productdate}><span className={styles.dateText}>마지막 착용 _ </span>4 days ago</p>
                                        <div className={styles.productName}>{data.name}</div>
                                    </div>
                                    <section className={styles.productDetail}>
                                        <p className={styles.productBrand}>Adidas</p>
                                        <p className={styles.productWearNum}>착용 횟수 : 4번</p>
                                    </section>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className={styles.bottom}>
                <button className={styles.addBtn}>+ Add New</button>
            </div>

        </div >
    )
}

export default ClothesSelect;
