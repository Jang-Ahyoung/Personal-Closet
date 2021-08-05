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

    return (
        <div className={styles.conatiner}>
            <div className={styles.closeIcon} >
                <span>Top</span>
                <FontAwesomeIcon icon={faTimesCircle} className={styles.Icon} /></div>
            <SearchBar handleSearch={handleSearch} />
            <div className={styles.productContainer}>
                {
                    clothesData.map((data) =>
                        <div className={styles.product}>
                            <img className={styles.productImg} src="img/cloth/dress.jpg"></img>
                            <div className={styles.productDesc}>
                                <div className={styles.productName}>{data.name}</div>
                                <section className={styles.productDetail}>
                                    <div className={styles.productSection}>
                                        <p className={styles.productLabel}>price</p>
                                        <p className={styles.productInfo}>\ 20000</p>
                                    </div>
                                    <div className={styles.productSection}>
                                        <p className={styles.productLabel}>구매일</p>
                                        <p className={styles.productInfo}>2021.10.32</p>
                                    </div>
                                    <div className={styles.productSection}>
                                        <p className={styles.productLabel}>Brand</p>
                                        <p className={styles.productInfo}>{data.brandName || 'No'}</p>
                                    </div>
                                    <div className={styles.productSection}>
                                        <p className={styles.productLabel}>선호도</p>
                                        <p className={styles.productInfo}>Good</p>
                                    </div>
                                </section>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ClothesSelect;
