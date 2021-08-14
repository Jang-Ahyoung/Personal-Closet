import React, { useState } from 'react';
import styles from './CodiEdit.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";


function CodiEdit(props) {
    let [type, setType] = useState(props.history.location.state.type);
    return (
        <div className={styles.container}>
            <div className={styles.btnContainer}>
                <button className={`${styles.button} ${type == 'type' && styles.selectedBtn}`} onClick={() => setType("type")}>Type</button>
                <button className={`${styles.button} ${type == 'style' && styles.selectedBtn}`} onClick={() => setType("style")}>Style</button>
            </div>
            <div className={styles.boxBorder}>
                <div className={styles.boxSection}>
                    <div className={`${styles.boxContainer} ${styles.plusBox}`}>
                        <FontAwesomeIcon icon={faPlus} className={styles.Icon} />
                        <div className={styles.plusText}>New</div>
                    </div>
                    <div className={styles.boxContainer}>
                        <img className={styles.boxImg} src="img/cloth/dark.jpg" />
                        <div className={styles.editIcon}><FontAwesomeIcon icon={faEdit} /></div>
                        <p className={styles.codiName}>무채색</p>
                        <div className={styles.closeIcon}><FontAwesomeIcon icon={faTrash} /></div>
                    </div>
                    <div className={styles.boxContainer}>
                        <img className={styles.boxImg} src="img/cloth/dark.jpg" />
                        <div className={styles.editIcon}><FontAwesomeIcon icon={faEdit} /></div>
                        <p className={styles.codiName}>무채색</p>
                        <div className={styles.closeIcon}><FontAwesomeIcon icon={faTrash} /></div>
                    </div>
                    <div className={styles.boxContainer}>
                        <img className={styles.boxImg} src="img/cloth/dark.jpg" />
                        <div className={styles.editIcon}><FontAwesomeIcon icon={faEdit} /></div>
                        <p className={styles.codiName}>무채색</p>
                        <div className={styles.closeIcon}><FontAwesomeIcon icon={faTrash} /></div>
                    </div>
                    <div className={styles.boxContainer}>
                        <img className={styles.boxImg} src="img/cloth/dark.jpg" />
                        <div className={styles.editIcon}><FontAwesomeIcon icon={faEdit} /></div>
                        <p className={styles.codiName}>무채색</p>
                        <div className={styles.closeIcon}><FontAwesomeIcon icon={faTrash} /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CodiEdit;