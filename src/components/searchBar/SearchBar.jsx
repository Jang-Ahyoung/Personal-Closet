import React from 'react';
import styles from './SearchBar.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function SearchBar(props) {
    return (
        <div className={styles.container} onChange={props.handleSearch}>
            <div className={styles.inputContainer}>
                <FontAwesomeIcon className={styles.inputIcon} icon={faSearch} />
                <input className={styles.input} type="text" placeholder="검색어를 입력해주세요 . . ." ></input>
            </div>
        </div>
    )
}

export default SearchBar;