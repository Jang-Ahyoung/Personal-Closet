import React, { useRef, useState } from 'react';
import styles from './ClothesUpdate.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import BackArrowHeader from '../backArrowHeader/BackArrowHeader';


function ClothesUpdate() {
    const [name, setName] = useState(null);
    const [category, setCategory] = useState(null);
    const [price, setPrice] = useState(null);
    const [color, setColor] = useState(null);
    const [size, setSize] = useState(null);
    const inputRef = useRef();
    const history = useHistory();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, category, price, color, size);
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
                    <input className={styles.title} type="text" placeholder="상품명" onChange={(e) => setName(e.target.value)} required></input>
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
                        <div >
                            \ <input type="number" className={styles.price} placeholder="가격" onChange={(e) => setPrice(e.target.value)}></input>
                        </div>
                    </section>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.ImageInput} >
                        <input className={styles.Prodectinput} ref={inputRef} onChange={onChange} type="file" accept="image/*" name="file" onChange={(e) => setCategory(e.target.value)}></input>
                        <FontAwesomeIcon className={styles.ImageIcon} icon={faUpload} onClick={onButtonClick} />
                    </div>
                    <div className={styles.ProductDesc}>
                        <section className={styles.section}>
                            <input className={styles.inputSize} type="text" placeholder="Size" onChange={(e) => setSize(e.target.value)} />
                        </section>
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
