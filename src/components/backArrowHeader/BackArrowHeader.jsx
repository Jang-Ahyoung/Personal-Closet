import React from 'react'
import styles from './BackArrowHeader.module.css'
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

function BackArrowHeader() {
    const history = useHistory();
    return (
        <header className={styles.header} onClick={() => history.goBack()} >
            <FontAwesomeIcon icon={faChevronLeft} />
        </header>
    )
}

export default BackArrowHeader;
