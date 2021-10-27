import React, { useState } from 'react'
import styles from './Clothes.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faPlusSquare, faSortDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import BackArrowHeader from '../backArrowHeader/BackArrowHeader';
import CLOTHES_DATA from '../../CLOTHES.json';
import SearchBar from '../searchBar/SearchBar';

function Clothes(props) {
    const [category, setCategory] = useState(props.location.state.category || categoryArray[0]);
    const [smallCategory, setSmallCategory] = useState(0);
    const categoryArray = ["All", "Outer", "Top", "Pants", "Dress", "Shoes", "Acc"];
    const smallCategoryArray = ['전체', '나시/반팔', '티셔츠/맨투맨', '블라우스/셔츠', '니트', '스포츠웨어'];
    const imgArray = ["/cloth/clothing-store.jpg", "/cloth/outer.jpg", "/top.jpg", "/cloth/pants.jpg", "/cloth/top2.jpg", "/cloth/shoes.jpg", "/acc.jpg",];
    const [searchText, setSearchText] = useState(null);
    const handleSearch = (e) => {
        setSearchText(e.target.value);
    }
    return (
        <div className={styles.container}>
            <BackArrowHeader />
            <div className={styles.categoryContainer} >
                {categoryArray.map((kind, index) => {
                    return <button key={index} onClick={() => setCategory(categoryArray[index])} className={kind === category ? `${styles.categoryBtn} ${styles.seletBtn}` : `${styles.categoryBtn}`} >{kind}</button>
                })}
            </div>
            <SearchBar handleSearch={handleSearch} />
            <img className={styles.coverImg} src={`img${imgArray[categoryArray.indexOf(category)] || imgArray[1]}`}></img>
            <p className={styles.coverText}>{category == 'All' ? category : `My cuty ${category}`}</p>
            <div className={styles.filterContainer}>
                <div className={styles.filter}>

                    <p className={styles.filterSelect}>New</p>
                    <span className={styles.filterText}>HighPrice</span>
                    <FontAwesomeIcon icon={faSortDown} className={styles.filterIcon} />
                    <p className={styles.filterText}>Favor</p>
                </div>
                <Link to={{ pathname: "/categoryExpand", state: { category } }}>
                    <FontAwesomeIcon icon={faExpandAlt} className={styles.expandIcon} />
                </Link>
            </div>
            <div className={styles.miniCategory}>
                {
                    smallCategoryArray.map((categoty, index) => {
                        return <p className={`${styles.miniCategory_text} ${smallCategory == index && styles.seleted}`} onClick={() => setSmallCategory(index)}>{categoty}</p>
                    })
                }
            </div>

            <div className={styles.produtContainer}>
                {CLOTHES_DATA
                    .filter((clothes) => {
                        if (category == 'All') return clothes;
                        else if (clothes.category.includes(category)) return clothes;
                    })
                    .filter((clothes) => {
                        if (!searchText) return clothes;
                        else if (searchText && clothes.name.toLowerCase().includes(searchText.toLowerCase())) return clothes;
                    })
                    .map((data, key) => {
                        return (
                            <>
                                <Link
                                    to={{
                                        pathname: '/clothDetail',
                                        state: {
                                            data
                                        }
                                    }}
                                    style={{ textDecoration: "none" }}>
                                    <div className={styles.produt} key={key}>
                                        <img className={styles.produtPhoto} alt="produtImg" src={data.photo}></img>
                                        <div className={styles.produtDetail}>
                                            <div className={styles.detailTop}>
                                                <p className={styles.name}>{data.name}</p>
                                                <span className={styles.brandName}>{data.brandName}</span>
                                            </div>
                                            <div className={styles.detailBottom}>
                                                {data?.tags.map(tag => <span className={styles.tags}>#{tag}</span>)}
                                                <div></div>
                                                {/* <div className={styles.lastDate}>최근 착용 : {data.lastDate}</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </>
                        )
                    })
                }

                <div className={styles.noData}>
                    <Link to={{ pathname: "/clothesUpdate", state: { category } }} style={{ textDecoration: "none", color: "black" }}>
                        <FontAwesomeIcon icon={faPlusSquare} className={styles.Icon} />
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Clothes
