import React from "react";
import styles from "./Main.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import { Link, useHistory } from "react-router-dom";


function Main() {
    const history = useHistory();
    return (
        <div className={styles.container}>
            <div className={styles.logo}>My Closet</div>
            <img className={styles.imgLeft} alt="CodiImg" src="img/cloth/clothing-store.jpg" onClick={() => history.push({ pathname: '/home', state: { type: "closet" } })}></img>
            <div className={styles.textLeft} >
                <FontAwesomeIcon icon={faSortUp} /><span className={styles.text}> My clothes</span>
            </div>
            <img className={styles.imgRight} alt="CodiImg" src="img/ocean.jpg" onClick={() => history.push({ pathname: '/home', state: { type: "codi" } })}></img>
            <div className={styles.textRight} >
                <FontAwesomeIcon icon={faSortUp} /> <span className={styles.text}> My codi</span>
            </div>
            <img className={styles.img} alt="CodiImg" src="img/acc.jpg"></img>
        </div>
    );
}

export default Main;
