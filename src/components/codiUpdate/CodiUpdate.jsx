import React, { useState } from 'react';
import styles from './CodiUpdate.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTshirt, faBeer } from "@fortawesome/free-solid-svg-icons";

import ClothesSelect from '../clothesSelect/ClothesSelect';
function CodiUpdate() {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState(false);
    const [codi, setCodi] = useState({
        Top: null,
        Bottom: null,
        Shoes: null,
        Outer: null,
        Bag: null,
        Acc: null
    });
    const handleOpen = (category) => {
        setOpen(!open);
        setCategory(category);
    }
    const situationArr = ["운동", "가족 모임", "근무", "데이트", "학교", "친구 모임", "저녁 약속"]

    return (
        <div>
            <div className={`${styles.container} ${open && styles.blur}`}>
                {/* <p className={styles.descriptionEng}>What you wear today, and for what ? Record your life 🎡</p>
                <p className={styles.description}>궁금하네요, 데일리 코디를 기록하세요 🧡</p> */}
                <div className={styles.input_container}>

                    <button className={styles.input_btn} onClick={() => handleOpen('Top')}>
                        <FontAwesomeIcon icon={faTshirt} className={styles.Icon} />
                        <div className={styles.input_right}>
                            <div className={styles.input_content}>
                                <p className={`${codi.Top && styles.codiClothes}`}>Top</p>
                                {codi.Top && <p className={styles.input} >{codi.Top}</p>}
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} className={styles.Icon} />
                        </div>
                    </button>
                    <button className={styles.input_btn} onClick={() => handleOpen('Bottom')}>
                        <FontAwesomeIcon icon={faTshirt} className={styles.Icon} />
                        <div className={styles.input_right}>
                            <div className={styles.input_content}>
                                <p className={`${codi.Bottom && styles.codiClothes}`}>Bottom</p>
                                {codi.Bottom && <p className={styles.input} >{codi.Bottom}</p>}
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} className={styles.Icon} />
                        </div>
                    </button>
                    <button className={styles.input_btn} onClick={() => handleOpen('Shoes')}>
                        <FontAwesomeIcon icon={faTshirt} className={styles.Icon} />
                        <div className={styles.input_right}>
                            <div className={styles.input_content}>
                                <p className={`${codi.Shoes && styles.codiClothes}`}>Shoes</p>
                                {codi.Shoes && <p className={styles.input} >{codi.Shoes}</p>}
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} className={styles.Icon} />
                        </div>
                    </button>
                    <button className={styles.input_btn} onClick={() => handleOpen('Outer')}>
                        <FontAwesomeIcon icon={faTshirt} className={styles.Icon} />
                        <div className={styles.input_right}>
                            <div className={styles.input_content}>
                                <p className={`${codi.Outer && styles.codiClothes}`}>Outer</p>
                                {codi.Outer && <p className={styles.input} >{codi.Outer}</p>}
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} className={styles.Icon} />
                        </div>
                    </button>
                    <button className={styles.input_btn} onClick={() => handleOpen('Bag')}>
                        <FontAwesomeIcon icon={faTshirt} className={styles.Icon} />
                        <div className={styles.input_right}>
                            <div className={styles.input_content}>
                                <p className={`${codi.Bag && styles.codiClothes}`}>Bag</p>
                                {codi.Bag && <p className={styles.input} >{codi.Bag}</p>}
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} className={styles.Icon} />
                        </div>
                    </button>
                    <button className={styles.input_btn} onClick={() => handleOpen('Acc')}>
                        <FontAwesomeIcon icon={faTshirt} className={styles.Icon} />
                        <div className={styles.input_right}>
                            <div className={styles.input_content}>
                                <p className={`${codi.Acc && styles.codiClothes}`}>Acc</p>
                                {codi.Acc && <p className={styles.input} >{codi.Acc}</p>}
                            </div>
                            <FontAwesomeIcon icon={faAngleDown} className={styles.Icon} />
                        </div>
                    </button>
                </div>
                {/* <img className={styles.img} src="img/cloth/clothing-store.jpg"></img> */}
            </div>
            {open && (
                <ClothesSelect setOpen={setOpen} codi={codi} setCodi={setCodi} category={category} />
            )}
        </div>
    )
}

export default CodiUpdate
