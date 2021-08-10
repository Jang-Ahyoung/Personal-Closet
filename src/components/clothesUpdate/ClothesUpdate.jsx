import React, { useEffect, useRef, useState } from 'react';
import styles from './ClothesUpdate.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faHeart, faShoppingCart, faUserAstronaut, faStore, faTshirt, faUserTag } from "@fortawesome/free-solid-svg-icons";
import BackArrowHeader from '../backArrowHeader/BackArrowHeader';


function ClothesUpdate() {
    const [name, setName] = useState(null);
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState(null);
    const [color, setColor] = useState(null);
    const [material, setMaterial] = useState(null);
    const [size, setSize] = useState(null);
    const [brand, setBrand] = useState(null);
    const [date, setDate] = useState(null);
    const [photo, setPhoto] = useState(null);

    const inputRef = useRef();
    let len = price && price.length;
    let num = 0;
    if (price && len > 4) {
        let len = price.length;
        if (price.substr(len - 4) == '0000') {
            num = price.substr(0, len - 4) + '만원';
        }
        else {
            if (price.substr(len - 3) == '000') {
                num = price.substr(0, len - 4) + '만' + price.substr(len - 4, 1) + '천원';
            }
            else num = (price.substr(0, len - 4) + '만' + price.substr(len - 4) + '원');
        }
    }
    else num = price;

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const onButtonClick = event => {
        event.preventDefault();
        inputRef.current.click();
    };
    const onChange = (e) => {
        console.log(e.target)
    }

    return (
        <div className={styles.container}>
            <form className={styles.mainSection} onSubmit={handleSubmit}>
                <div className={styles.top}>
                    <BackArrowHeader />
                    <p className={styles.headerTitle}> + New Clothes</p>
                    <p className={styles.headerDesc}> 상품명 & 카테고리 <br /> 구매 가격, 사이즈, 색상을 입력해주세요.</p>
                    <div className={styles.title}>
                        <FontAwesomeIcon icon={faUserAstronaut} className={`${styles.inputIcon} ${styles.nameIcon}`} />
                        <div className={styles.inputSection}>
                            <input className={styles.titleContext} type="text" placeholder="상품명" onChange={(e) => setName(e.target.value)} required />
                        </div>
                    </div>
                    <section className={styles.middle}>
                        <div className={styles.category}>
                            <select onChange={(e) => setCategory(e.target.value)} required>
                                <option className={styles.option}>Top</option>
                                <option>Pants</option>
                                <option>Outer</option>
                                <option>Dress</option>
                                <option>Shoes</option>
                                <option>Acc</option>
                            </select>
                        </div>
                        <div className={styles.price}>
                            <FontAwesomeIcon icon={faHeart} className={`${styles.priceIcon} ${styles.nameIcon}`} />
                            <div>
                                <p className={styles.priceformated}>{num}</p>
                                <input className={styles.priceContext} type="number" placeholder="가격" onChange={(e) => setPrice(e.target.value)}></input>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.ImageInput} >
                        <input className={styles.Prodectinput} ref={inputRef} onChange={onChange} type="file" accept="image/*" name="file" onChange={(e) => setPhoto(e.target.value)}></input>
                        <FontAwesomeIcon className={styles.ImageIcon} icon={faUpload} onClick={onButtonClick} />
                    </div>
                    <div className={styles.ProductDesc}>
                        <div className={styles.rightSide}>
                            <div className={styles.inputLine}>
                                <div className={styles.inputContainer}>
                                    <FontAwesomeIcon icon={faTshirt} className={`${styles.inputIcon} ${styles.tshirtIcon}`} />
                                    <div className={styles.inputSection}>
                                        <p className={material ? `${styles.inputBeWritten}` : `${styles.inputTitle}`}>소재</p>
                                        <input className={styles.inputContext} type="text" placeholder="소재를 입력해주세요" onChange={(e) => setMaterial(e.target.value)} />
                                    </div>
                                </div>
                                <div className={styles.inputContainer}>
                                    <FontAwesomeIcon icon={faUserTag} className={`${styles.inputIcon} ${styles.sizeIcon}`} />
                                    <div className={styles.inputSection}>
                                        <p className={size ? `${styles.inputBeWritten}` : `${styles.inputTitle}`}>Size</p>
                                        <input className={styles.inputContext} type="text" placeholder="사이즈를 입력해주세요" onChange={(e) => setSize(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.inputLine}>
                                <div className={styles.inputContainer}>
                                    <FontAwesomeIcon icon={faStore} className={`${styles.inputIcon} ${styles.storeIcon}`} />
                                    <div className={styles.inputSection}>
                                        <p className={brand ? `${styles.inputBeWritten}` : `${styles.inputTitle}`}>Brand</p>
                                        <input className={styles.inputContext} type="text" placeholder="브랜드를 입력해주세요" onChange={(e) => setBrand(e.target.value)} />
                                    </div>
                                </div>
                                <div className={styles.inputContainer}>
                                    <FontAwesomeIcon icon={faShoppingCart} className={`${styles.inputIcon} ${styles.cartIcon}`} />
                                    <div className={styles.inputSection}>
                                        <p className={date ? `${styles.inputBeWritten}` : `${styles.inputTitle}`}>구매 일자</p>
                                        <input className={styles.inputContext} type="date" placeholder="구매 날짜 입력" onChange={(e) => setDate(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <section className={styles.colorContainer}>
                            <p className={styles.description}>Main Color</p>
                            <input className={styles.colorinput} type="color" placeholder="색상" onChange={(e) => setColor(e.target.value)}></input>
                        </section>
                        <button className={styles.submit}>Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ClothesUpdate
