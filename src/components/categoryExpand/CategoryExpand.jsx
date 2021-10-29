import React from 'react';
import styles from './CategoryExpand.module.css';
import { Link } from "react-router-dom";
import BackArrowHeader from '../backArrowHeader/BackArrowHeader';
import CLOTHES_DATA from '../../CLOTHES.json';

function CategoryExpand(props) {
    const category = props.location.state.category;
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
                {CLOTHES_DATA
                    .filter((clothes) => {
                        if (category == 'All') return clothes;
                        else if (clothes.category.includes(category)) return clothes;
                    })
                    .map((data, key) => {
                        return (
                            <Link to="/test" style={{ textDecoration: "none" }}>
                                <div className={styles.produt} key={key}>
                                    <div className={styles.produt}>
                                        <div className={styles.photoContainer}>
                                            <img className={styles.produtPhoto} alt="produtImg" src={data.photo}></img>
                                        </div>
                                        <div className={styles.produtDetail}>
                                            <div className={styles.detailTop}>
                                                <p className={styles.name}>{data.name}</p>
                                                <span className={styles.brandName}>{data.brandName}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CategoryExpand;
