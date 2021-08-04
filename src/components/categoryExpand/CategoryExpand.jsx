import React from 'react';
import styles from './CategoryExpand.module.css';
import { Link } from "react-router-dom";
import BackArrowHeader from '../backArrowHeader/BackArrowHeader';

function CategoryExpand() {
    return (
        <div className={styles.container}>
            <BackArrowHeader />
            <div className={styles.filterContainer}>
                <div className={styles.filter}>
                    <p className={styles.filterSelect}>New</p>
                    <p className={styles.filterText}>HighPrice</p>
                    <p className={styles.filterText}>Favor</p>
                    <p className={styles.filterText}>LowPrice</p>
                </div>
            </div>

            <div className={styles.produtContainer}>
                <Link to="/test" style={{ textDecoration: "none" }}>
                    <div className={styles.produt}>
                        <div className={styles.photoContainer}>
                            <img className={styles.produtPhoto} alt="produtImg" src="img/cloth/white_shirt.png"></img>
                        </div>
                        <div className={styles.produtDetail}>
                            <div className={styles.detailTop}>
                                <p className={styles.name}>Orange point T-shirt</p>
                                <span className={styles.brandName}>Adidas</span>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default CategoryExpand;
