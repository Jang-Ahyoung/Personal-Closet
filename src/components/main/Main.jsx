import React from "react";
import styles from "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faSortUp } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";


function Main() {
    const history = useHistory();
    const handleHistory = (type) => {
        history.push({ pathname: "/collection", state: { type: type } })
    }
    return (
        <div className={styles.container}>
            <div className={styles.logo}>My Closet</div>

            <img className={styles.imgLeft} alt="CodiImg" src="img/cloth/clothing-store.jpg" onClick={() => handleHistory('closet')}></img>
            <div className={styles.textLeft} >
                <FontAwesomeIcon icon={faSortUp} />
                <span className={styles.text} onClick={() => handleHistory('closet')}> My clothes</span>
            </div>

            <img className={styles.imgRight} alt="CodiImg" src="img/ocean.jpg" onClick={() => handleHistory('codi')}></img>
            <div className={styles.textRight} >
                <FontAwesomeIcon icon={faCaretRight} /> <span className={styles.textCodi} onClick={() => handleHistory('codi')}> My codi</span>
            </div>
        </div >
    );
}

export default Main;
